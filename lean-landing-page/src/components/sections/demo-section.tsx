'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

const DemoSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [dragActive, setDragActive] = useState(false);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle the file upload logic
      console.log("File uploaded:", e.dataTransfer.files[0].name);
      setActiveStep(2);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle the file upload logic
      console.log("File selected:", e.target.files[0].name);
      setActiveStep(2);
    }
  };
  
  const nextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };
  
  return (
    <section id="product" className="py-20 px-6 md:px-12 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Try Our Intelligent Automation Platform
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Streamline your DME workflow by converting patient documents into actionable data.
        </p>
        
        <div className="flex justify-center mb-10">
          <div className="steps flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div className={`step flex items-center gap-3 ${activeStep >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                1
              </div>
              <span className="font-medium">Upload Intake Form</span>
            </div>
            <div className={`step flex items-center gap-3 ${activeStep >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                2
              </div>
              <span className="font-medium">Process with LeanVision™</span>
            </div>
            <div className={`step flex items-center gap-3 ${activeStep >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                3
              </div>
              <span className="font-medium">Create Patient Record</span>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-xl shadow-sm p-8 max-w-2xl mx-auto">
          {activeStep === 1 && (
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${dragActive ? 'border-primary bg-primary/5' : 'border-border'}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p className="mb-2 font-medium">Drag and drop your patient documents here</p>
              <p className="text-sm text-muted-foreground mb-4">Supported formats: PDF, JPG, PNG, TIFF - Referrals, CMNs, Patient Intake Forms</p>
              <Button variant="outline">
                Select File
                <input 
                  id="file-upload" 
                  type="file" 
                  className="hidden" 
                  accept=".pdf,.jpg,.jpeg,.png,.tiff" 
                  onChange={handleFileChange}
                />
              </Button>
            </div>
          )}
          
          {activeStep === 2 && (
            <div className="text-center">
              <div className="mb-6">
                <svg className="w-16 h-16 mx-auto text-primary animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Processing with LeanVision™...</h3>
              <p className="text-muted-foreground mb-6">Our AI is analyzing your document and extracting patient information</p>
              <Button onClick={nextStep}>
                Skip to Results
              </Button>
            </div>
          )}
          
          {activeStep === 3 && (
            <div>
              <h3 className="text-xl font-medium mb-4">Patient Data Extracted</h3>
              <div className="bg-muted/50 rounded-lg p-4 mb-6 font-mono text-sm">
                <div className="mb-2"><span className="text-primary">Patient Name:</span> John Doe</div>
                <div className="mb-2"><span className="text-primary">DOB:</span> 05/12/1958</div>
                <div className="mb-2"><span className="text-primary">Insurance:</span> Medicare</div>
                <div className="mb-2"><span className="text-primary">Policy #:</span> 123456789A</div>
                <div className="mb-2"><span className="text-primary">Diagnosis:</span> Sleep Apnea (G47.33)</div>
                <div><span className="text-primary">Prescribed Item:</span> CPAP Machine</div>
              </div>
              <div className="flex justify-center">
                <Button variant="cta" onClick={() => setActiveStep(1)}>
                  Process Another Document
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground text-center mt-4">
          We do not store your data permanently. All uploads are processed securely and deleted after analysis.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;