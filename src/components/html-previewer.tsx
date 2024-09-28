"use client";
import React , {useState , ChangeEvent} from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { predefinedHtml } from './predefined';
const HtmlPreviewer = () => {
    const [htmlCode , setHtmlCode] = useState<string>("");
    const [previewHtml , setPreviewHtml] = useState<string>("");
    
    const handlePreview = () : void => {
        setPreviewHtml(htmlCode)

    }

    const handlePasteHtml = () : void => {
        setHtmlCode(predefinedHtml);
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) : void => {
        setHtmlCode(e.target.value); 
    
    }
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-orange-300'>
        <div className='w-full max-w-2xl p-6 rounded-lg shadow-green-700 bg-red-300'>
            <h1 className='text-2xl font-bold text-center mb-4'>HTML Previewer</h1>
            <p className='text-center mb-4'>Enter Your HTML and see the preview.</p>
            <div className="grid gap-4">

            <Textarea value={htmlCode} onChange={handleChange} placeholder='Enter Your HTML code here..' className='p-4 rounded-lg border border-input bg-background mb-4' rows={8} ></Textarea>
            <div className='flex justify-center'>
                <div className='flex gap-2'>
                    <Button onClick={handlePreview}>Generate Preview</Button>
                    <Button onClick={handlePasteHtml}>Paste HTML</Button>
                </div>
            </div>
                <div className='p-4 rounded-lg border border-input bg-background'>
                    <div dangerouslySetInnerHTML={{ __html: previewHtml}} />
                </div>
            </div>
            
        </div>
      
    </div>
  );
};

export default HtmlPreviewer
