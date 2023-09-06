// huggingfaceAPI.js

export async function query(data) {
	const apiKey = "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"; 
	const response = await fetch(
		"https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest",
		{
			headers: { Authorization: `Bearer ${apiKey}` },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}
