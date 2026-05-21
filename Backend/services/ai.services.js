const {GoogleGenAI}=require('@google/genai')
const ai=new GoogleGenAI({
    apiKey:process.env.GOOGLE_API_KEY
})

async function invokeGeminiAI(){

        const response=await ai.models.generateContent({
            model:'gemini-2.5-flash-lite',
            contents:"Hello Gemini, how are you doing today?"
          
        })
        console.log(response.text)
    }
    module.exports=invokeGeminiAI