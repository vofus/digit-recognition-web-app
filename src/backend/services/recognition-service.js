import modRecognizer from "../modules/mod-recognizer";

/**
 * Отправляем запрос на распознавание
 */
export async function recognize(requestBody) {
  const response = await modRecognizer.post("/recognition", requestBody);

  return response ? response.data : null;
}