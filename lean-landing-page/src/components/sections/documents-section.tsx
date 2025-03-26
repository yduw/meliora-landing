const DocumentsSection = () => {
  const documents = [
    {
      title: 'Patient Intake Forms',
      description: 'Extract patient demographics, insurance information, and medical history with high accuracy.'
    },
    {
      title: 'Physician Referrals',
      description: 'Capture prescriber details, diagnosis codes, prescribed equipment, and therapy requirements.'
    },
    {
      title: 'Certificates of Medical Necessity',
      description: 'Automatically process CMNs for oxygen, CPAP, hospital beds, and other DME equipment.'
    },
    {
      title: 'Insurance Cards',
      description: 'Extract member IDs, group numbers, plan information, and coverage details from insurance cards.'
    },
    {
      title: 'Explanation of Benefits',
      description: 'Process EOB documents to update patient accounts and reconcile payments.'
    },
    {
      title: 'Prior Authorization Forms',
      description: 'Extract required documentation for prior authorization submissions to payers.'
    },
    {
      title: 'Sleep Study Reports',
      description: 'Process polysomnography reports for CPAP and BiPAP therapy qualifications.'
    },
    {
      title: 'Proof of Delivery',
      description: 'Validate delivery confirmations for billing and compliance documentation.'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">All-in-One Intelligent Automation</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          LeanVision™ can extract structured data from virtually any healthcare document, 
          including:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">{doc.title}</h3>
              <p className="text-sm text-muted-foreground">{doc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;