import Groq from "groq-sdk";

const groq = new Groq({ 
  apiKey: process.env.GROQ_API_KEY 
});

export async function POST(request) {
  try {
    const { message } = await request.json();

    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "llama-3.3-70b-versatile",
    });

    const response = completion.choices[0].message.content;
    return Response.json({ message: response });

  } catch (error) {
    console.log("ERROR:", error.message);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}