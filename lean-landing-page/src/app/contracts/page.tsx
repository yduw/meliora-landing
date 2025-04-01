'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ContractsPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [contracts, setContracts] = useState([
    {
      id: 'CT1001',
      name: 'Equipment Lease Agreement',
      date: '2025-01-15',
      status: 'Active',
      type: 'Lease'
    },
    {
      id: 'CT1002',
      name: 'AI Support Services Contract',
      date: '2025-02-20',
      status: 'Active',
      type: 'Service'
    },
    {
      id: 'CT1003',
      name: 'Phototherapy Equipment Purchase',
      date: '2024-11-05',
      status: 'Active',
      type: 'Purchase'
    },
    {
      id: 'CT1004',
      name: 'Maintenance Agreement',
      date: '2025-03-10',
      status: 'Pending',
      type: 'Service'
    }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demonstration purposes, using a simple password
    if (password === 'demo123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  // For demo purposes only - in production, you'd use proper authentication
  useEffect(() => {
    // Check for session or token here
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 px-6">
        <div className="max-w-md w-full bg-card rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-indigo-400 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-white/20 text-white w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold shadow-sm">H</div>
                <div className="font-bold text-xl">Helix Processing</div>
              </Link>
            </div>
            <h1 className="text-2xl font-bold mb-2">Customer Portal</h1>
            <p className="text-white/80">Access your contracts and agreements</p>
          </div>
          
          <div className="p-8">
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Enter your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-card"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-indigo-400 hover:from-primary/90 hover:to-indigo-400/90"
              >
                Log In
              </Button>
              
              <p className="mt-4 text-sm text-muted-foreground text-center">
                Forgotten your password? Contact support at{' '}
                <a href="mailto:support@helixprocessing.com" className="text-primary hover:underline">
                  support@helixprocessing.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">Customer Portal</h1>
            <p className="text-muted-foreground">View and manage your contracts and agreements</p>
          </div>
          <Link href="/">
            <Button variant="outline" className="group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden mb-12">
          <div className="p-6 border-b border-border bg-muted/30">
            <h2 className="text-xl font-semibold">Your Contracts</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/20 text-left">
                <tr>
                  <th className="px-6 py-4 text-sm font-medium">Contract ID</th>
                  <th className="px-6 py-4 text-sm font-medium">Name</th>
                  <th className="px-6 py-4 text-sm font-medium">Date</th>
                  <th className="px-6 py-4 text-sm font-medium">Type</th>
                  <th className="px-6 py-4 text-sm font-medium">Status</th>
                  <th className="px-6 py-4 text-sm font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {contracts.map((contract) => (
                  <tr key={contract.id} className="hover:bg-muted/10">
                    <td className="px-6 py-4 text-sm">{contract.id}</td>
                    <td className="px-6 py-4 text-sm font-medium">{contract.name}</td>
                    <td className="px-6 py-4 text-sm">{contract.date}</td>
                    <td className="px-6 py-4 text-sm">{contract.type}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        contract.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {contract.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-primary hover:text-primary/80 font-medium">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl shadow-sm border border-border p-6">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <p className="text-muted-foreground mb-4">Need help with your equipment or have questions about your contracts?</p>
            <Button variant="outline" className="w-full">Contact Support</Button>
          </div>
          
          <div className="bg-card rounded-xl shadow-sm border border-border p-6">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Documents</h3>
            <p className="text-muted-foreground mb-4">Access user manuals, guides, and other important documents.</p>
            <Button variant="outline" className="w-full">View Documents</Button>
          </div>
          
          <div className="bg-card rounded-xl shadow-sm border border-border p-6">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p className="text-muted-foreground mb-4">Manage your account settings and preferences.</p>
            <Button variant="outline" className="w-full">Account Settings</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractsPage;