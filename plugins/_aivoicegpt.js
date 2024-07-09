const gtts = require("node-gtts");
const fetch = require("node-fetch");
const { readFileSync, unlinkSync } = require("fs");
const { join } = require("path");
const axios = require("axios");

const defaultLang = "id";
const language = "id";
const sysmsg = `Akan bertindak seperti bot WhatsApp.`;

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `*Masukkan pertanyaan untuk menggunakan perintah ini*\n\n*Contoh:*\n*- ${
      usedPrefix + command
    } Refleksi tentang Netflix La Casa de Papel 2022*\n*- ${
      usedPrefix + command
    } Kode JS untuk permainan kartu*`;

  try {
  m.reply(wait);
    conn.sendPresenceUpdate("composing", m.chat);
    const inputValue = text;
    const chatApiUrl = `https://aemt.me/openai?text=${encodeURIComponent(
      inputValue
    )}`; // Modified chat API URL
    const textToSpeechApiUrl =
      "https://api.elevenlabs.io/v1/text-to-speech/gYI6kNSqj6tHWaU333p1";
    const chatResponse = await axios.get(chatApiUrl); // Use axios to fetch chat response
    const chatData = chatResponse.data; // Assuming the response data is directly usable as JSON
    const textToSpeechResponse = await fetch(textToSpeechApiUrl, {
      method: "POST",
      headers: {
        accept: "audio/mpeg",
        "xi-api-key": "9c29ce63d59953942b8da20e04755a03",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: chatData.result, // Assuming the response structure has a 'result' field containing the chat text
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.5,
        },
      }),
    });

    const audioBuffer = await textToSpeechResponse.arrayBuffer();
    const audioFilePath = join(__dirname, "../tmp", "response.mp3");
    const audioBufferData = Buffer.from(audioBuffer);
    const fs = require("fs");
    fs.writeFileSync(audioFilePath, audioBufferData);

    await conn.sendMessage(
      m.chat,
      {
        audio: { url: audioFilePath },
        fileName: "response.mp3",
        mimetype: "audio/mpeg",
        ptt: true,
      },
      {
        quoted: m,
      }
    );

    // Clean up the audio file after sending
    unlinkSync(audioFilePath);

  } catch (error) {
    console.error("Error in handler:", error);
    throw "Terjadi kesalahan dalam mengambil data";
  }
};

handler.help = ["voicegpt"];
handler.tags = ["ai"];
handler.command = /^(openaivoce|voicegpt|gptvoice)$/i;
handler.register = true;
module.exports = handler;

function tts(text, lang = "id") {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang);
      let filePath = join(__dirname, "../tmp", 1 * new Date() + ".wav");
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath));
        unlinkSync(filePath);
      });
    } catch (e) {
      reject(e);
    }
  });
}
