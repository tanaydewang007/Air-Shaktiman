'use client';

import React, { useState } from 'react';
import {
  Building2,
  Ticket,
  Award,
  ShieldCheck,
  PlusCircle,
  TrendingUp,
  Leaf,
  Coins,
  Medal,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  Zap,
  Coffee,
  Flame,
  FileCheck,
  Clock,
  FileBadge,
  ListChecks,
  MessageSquare,
  Check,
  X,
  Edit3,
  Globe,
  Bell,
  Send,
  Users,
  TreePine,
  Wind
} from 'lucide-react';

export default function CompanyPortalPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'coupons' | 'csr' | 'admin-check'>('profile');
  const [showModal, setShowModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [adminInquiryText, setAdminInquiryText] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Company Profile State
  const [companyInfo, setCompanyInfo] = useState({
    name: 'Tata Power Renewable & Community CSR',
    cin: 'CIN-L40100MH1919PLC000584',
    sector: 'Clean Energy & Environmental Sustainability',
    hq: 'Mumbai, Maharashtra, India',
    representative: 'Rohit Sharma (VP Social Impact)',
    email: 'csr-contact@tatapower.com',
    annualBudget: '₹ 25,00,000 INR',
    bio: 'Dedicated to empowering smart city citizen clean-up drives, municipal tree planting campaigns, and air quality improvement initiatives by sponsoring citizen reward points, local business discount vouchers, and environmental equipment.',
    zone: 'Zone 4 (East Metropolis)',
    citizensRewarded: '4,820 Citizens',
    treesFunded: '1,240 Trees',
    co2Offset: '18.4 Tons CO₂e'
  });

  // Coupons State
  const [couponList, setCouponList] = useState([
    {
      id: '1',
      title: 'EcoStore 20% Off Groceries',
      points: 200,
      value: '₹100 Off',
      claimed: 420,
      total: 500,
      status: 'Active',
      icon: ShoppingBag,
      color: 'bg-emerald-500/20 text-emerald-400'
    },
    {
      id: '2',
      title: 'Solar Power Bill Rebate Voucher',
      points: 500,
      value: '₹250 Rebate',
      claimed: 310,
      total: 400,
      status: 'Active',
      icon: Zap,
      color: 'bg-blue-500/20 text-blue-400'
    },
    {
      id: '3',
      title: 'Free Sustainable Bamboo Beverage Cup',
      points: 150,
      value: '100% Free Gift',
      claimed: 250,
      total: 250,
      status: 'Exhausted',
      icon: Coffee,
      color: 'bg-amber-500/20 text-amber-400'
    }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newPoints, setNewPoints] = useState(250);
  const [newValue, setNewValue] = useState('₹150 Off');
  const [newTotal, setNewTotal] = useState(500);

  const handleAddCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    setCouponList([
      ...couponList,
      {
        id: Date.now().toString(),
        title: newTitle,
        points: Number(newPoints),
        value: newValue,
        claimed: 0,
        total: Number(newTotal),
        status: 'Active',
        icon: Ticket,
        color: 'bg-emerald-500/20 text-emerald-400'
      }
    ]);
    setShowModal(false);
    setNewTitle('');
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminInquiryText) return;
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setAdminInquiryText('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Navbar */}
      <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-white flex items-center justify-center font-black shadow-lg shadow-emerald-500/20">
              <Leaf className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">EcoSphere Network</span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Company Partner Portal</span>
            </div>
          </div>

          {/* Nav Tabs */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
                activeTab === 'profile'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>1. Company Profile</span>
            </button>
            <button
              onClick={() => setActiveTab('coupons')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
                activeTab === 'coupons'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>2. Points & Coupons</span>
            </button>
            <button
              onClick={() => setActiveTab('csr')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
                activeTab === 'csr'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>3. CSR Rank</span>
            </button>
            <button
              onClick={() => setActiveTab('admin-check')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
                activeTab === 'admin-check'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>4. Company to Org Check</span>
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3 border-l pl-3 border-slate-800">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-xs">
                TP
              </div>
              <div className="hidden lg:block text-left text-xs">
                <p className="font-bold text-white">Tata Power CSR</p>
                <p className="text-[10px] text-emerald-400">ID: #CORP-982</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Tab Selector */}
        <div className="md:hidden flex items-center justify-around bg-slate-950 border-t border-slate-800 px-2 py-2 text-[11px] font-bold">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-2 py-1.5 rounded-lg ${activeTab === 'profile' ? 'text-emerald-400 bg-slate-900' : 'text-slate-400'}`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('coupons')}
            className={`px-2 py-1.5 rounded-lg ${activeTab === 'coupons' ? 'text-emerald-400 bg-slate-900' : 'text-slate-400'}`}
          >
            Coupons
          </button>
          <button
            onClick={() => setActiveTab('csr')}
            className={`px-2 py-1.5 rounded-lg ${activeTab === 'csr' ? 'text-emerald-400 bg-slate-900' : 'text-slate-400'}`}
          >
            CSR Rank
          </button>
          <button
            onClick={() => setActiveTab('admin-check')}
            className={`px-2 py-1.5 rounded-lg ${activeTab === 'admin-check' ? 'text-emerald-400 bg-slate-900' : 'text-slate-400'}`}
          >
            Admin Check
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Top Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/70 border border-slate-800/80 p-5 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">CSR Tier</p>
              <h3 className="text-2xl font-black text-white mt-1">Tier 1 (Gold)</h3>
              <p className="text-xs text-emerald-400 font-medium mt-1 flex items-center">
                <TrendingUp className="w-3.5 h-3.5 mr-1" /> Top 5% in Region
              </p>
            </div>
            <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center border border-amber-500/20">
              <Medal className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/80 p-5 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Coupons</p>
              <h3 className="text-2xl font-black text-white mt-1">1,450 Issued</h3>
              <p className="text-xs text-slate-400 font-medium mt-1">980 Claimed by Citizens</p>
            </div>
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/20">
              <Ticket className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/80 p-5 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Points Pool Funded</p>
              <h3 className="text-2xl font-black text-white mt-1">320,000 pts</h3>
              <p className="text-xs text-emerald-400 font-medium mt-1 flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> ₹1.6 Lakhs Value
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/20">
              <Coins className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/80 p-5 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Admin Status</p>
              <h3 className="text-2xl font-black text-emerald-400 mt-1">Verified Org</h3>
              <p className="text-xs text-slate-400 font-medium mt-1">Audit synced 2 hrs ago</p>
            </div>
            <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center border border-purple-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* 1. COMPANY PROFILE */}
        {activeTab === 'profile' && (
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg">
                  TP
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{companyInfo.name}</h2>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-0.5 rounded-full font-bold">
                      Verified Partner
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Registration: {companyInfo.cin} • Sector: {companyInfo.sector}</p>
                </div>
              </div>
              <button
                onClick={() => setShowEditProfileModal(true)}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition flex items-center self-start shadow-md shadow-emerald-500/20"
              >
                <Edit3 className="w-3.5 h-3.5 mr-2" /> Edit Company Info
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">CSR Mission & Bio</h4>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed bg-slate-950/40 p-4 rounded-2xl border border-slate-800/80">
                    {companyInfo.bio}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800/80">
                    <p className="text-xs text-slate-400 font-medium">Headquarters</p>
                    <p className="text-sm font-bold text-white mt-1">{companyInfo.hq}</p>
                  </div>
                  <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800/80">
                    <p className="text-xs text-slate-400 font-medium">Designated CSR Representative</p>
                    <p className="text-sm font-bold text-white mt-1">{companyInfo.representative}</p>
                  </div>
                  <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800/80">
                    <p className="text-xs text-slate-400 font-medium">Contact Email</p>
                    <p className="text-sm font-bold text-white mt-1">{companyInfo.email}</p>
                  </div>
                  <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800/80">
                    <p className="text-xs text-slate-400 font-medium">Allocated Annual CSR Budget</p>
                    <p className="text-sm font-bold text-emerald-400 mt-1">{companyInfo.annualBudget}</p>
                  </div>
                </div>
              </div>

              {/* Corporate Highlights */}
              <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center">
                  <Sparkles className="w-4 h-4 text-emerald-400 mr-2" /> Corporate Impact Badges
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                    <span className="text-slate-400 flex items-center"><Wind className="w-3.5 h-3.5 mr-2 text-emerald-400" /> Active Zone:</span>
                    <span className="font-bold text-white">{companyInfo.zone}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                    <span className="text-slate-400 flex items-center"><Users className="w-3.5 h-3.5 mr-2 text-blue-400" /> Citizens Rewarded:</span>
                    <span className="font-bold text-white">{companyInfo.citizensRewarded}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                    <span className="text-slate-400 flex items-center"><TreePine className="w-3.5 h-3.5 mr-2 text-emerald-400" /> Trees Planted Funded:</span>
                    <span className="font-bold text-emerald-400">{companyInfo.treesFunded}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                    <span className="text-slate-400 flex items-center"><Leaf className="w-3.5 h-3.5 mr-2 text-teal-400" /> Carbon Offset:</span>
                    <span className="font-bold text-emerald-400">{companyInfo.co2Offset}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. USER POINT & COUPON RELEASE */}
        {activeTab === 'coupons' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-white">User Point & Coupon Release Management</h2>
                <p className="text-sm text-slate-400">Configure exchange rate, release citizen discount coupons, and manage reward budget.</p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition flex items-center shadow-lg shadow-emerald-500/20"
              >
                <PlusCircle className="w-4 h-4 mr-2" /> Release New Coupon / Perk
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Exchange Rate</span>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-lg font-black text-white">100 Green Points</span>
                  <span className="text-slate-500">=</span>
                  <span className="text-lg font-black text-emerald-400">₹50 Voucher</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">Citizens earn points by reporting pollution, cleaning waste, and planting trees.</p>
              </div>

              <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Coupon Budget Pool</span>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-lg font-black text-white">₹ 1,50,000</span>
                  <span className="text-xs text-slate-400">65% used</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2 mt-3 overflow-hidden border border-slate-800">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>

              <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Distribution Mode</span>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-black text-white">Instant Release</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Active
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2">Auto-approved for verified citizen cleanup actions.</p>
              </div>
            </div>

            <div className="bg-slate-900/70 rounded-3xl border border-slate-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                <h3 className="font-bold text-white">Issued Coupon Campaigns</h3>
                <span className="text-xs text-slate-400">{couponList.length} Active Campaigns</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-slate-950 text-xs uppercase text-slate-400 font-semibold border-b border-slate-800">
                    <tr>
                      <th className="px-6 py-3">Offer Title</th>
                      <th className="px-6 py-3">Points Cost</th>
                      <th className="px-6 py-3">Discount Value</th>
                      <th className="px-6 py-3">Claimed / Total</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {couponList.map((c) => {
                      const Icon = c.icon;
                      return (
                        <tr key={c.id} className="hover:bg-slate-800/30 transition">
                          <td className="px-6 py-4 font-semibold text-white flex items-center">
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center mr-3 ${c.color}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            {c.title}
                          </td>
                          <td className="px-6 py-4 font-bold text-white">{c.points} pts</td>
                          <td className="px-6 py-4 font-bold text-emerald-400">{c.value}</td>
                          <td className="px-6 py-4">{c.claimed} / {c.total}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${
                              c.status === 'Active'
                                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                            }`}>
                              {c.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 3. CSR RANK */}
        {activeTab === 'csr' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-950 via-emerald-950/40 to-slate-950 border border-emerald-500/30 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <Flame className="w-3.5 h-3.5 mr-1 text-amber-400" /> Rank #3 Overall Leaderboard
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Tata Power Renewable Corp</h3>
                  <p className="text-sm text-slate-300 max-w-xl">
                    You are just 450 CSR points away from reaching <strong className="text-amber-300">Rank #2</strong>. Sponsoring the upcoming East Metropolis Zone Cleanliness Drive will earn 800 bonus CSR points!
                  </p>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-800 text-center min-w-[180px]">
                  <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">CSR Score</span>
                  <div className="text-4xl font-black text-emerald-400 mt-1">9,420</div>
                  <span className="text-xs text-emerald-400 mt-1 block">▲ +12% this month</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/70 rounded-3xl border border-slate-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                <h3 className="font-bold text-white">Regional Corporate CSR Standings</h3>
                <span className="text-xs text-slate-400">Updated Daily</span>
              </div>
              <div className="divide-y divide-slate-800">
                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition">
                  <div className="flex items-center space-x-4">
                    <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold flex items-center justify-center text-sm">1</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Infosys Green Initiative Foundation</h4>
                      <p className="text-xs text-slate-400">Sponsored: 3,200 Cleanups • 12 Zones Active</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-white">12,850 pts</span>
                    <span className="text-xs text-slate-500 block">Tier 1 Platinum</span>
                  </div>
                </div>

                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition">
                  <div className="flex items-center space-x-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 font-bold flex items-center justify-center text-sm">2</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Reliance Foundation Eco-Drive</h4>
                      <p className="text-xs text-slate-400">Sponsored: 2,890 Cleanups • 9 Zones Active</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-white">9,870 pts</span>
                    <span className="text-xs text-slate-500 block">Tier 1 Gold</span>
                  </div>
                </div>

                <div className="px-6 py-4 flex items-center justify-between bg-emerald-950/30 border-l-4 border-emerald-500">
                  <div className="flex items-center space-x-4">
                    <span className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-sm">3</span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-bold text-emerald-300">Tata Power Renewable (Your Company)</h4>
                        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">You</span>
                      </div>
                      <p className="text-xs text-slate-400">Sponsored: 2,450 Cleanups • 8 Zones Active</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-emerald-400">9,420 pts</span>
                    <span className="text-xs text-emerald-400 font-medium block">Tier 1 Gold</span>
                  </div>
                </div>

                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition">
                  <div className="flex items-center space-x-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 font-bold flex items-center justify-center text-sm">4</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Wipro Earthian Network</h4>
                      <p className="text-xs text-slate-400">Sponsored: 1,980 Cleanups • 6 Zones Active</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-white">8,100 pts</span>
                    <span className="text-xs text-slate-500 block">Tier 2 Silver</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. COMPANY TO ORG. (ADMIN) CHECK */}
        {activeTab === 'admin-check' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Step 1</p>
                    <h4 className="text-sm font-bold text-white">Entity KYC</h4>
                  </div>
                </div>
                <span className="mt-3 inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Approved by Admin
                </span>
              </div>

              <div className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Step 2</p>
                    <h4 className="text-sm font-bold text-white">CSR Budget Escrow</h4>
                  </div>
                </div>
                <span className="mt-3 inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Verified & Locked
                </span>
              </div>

              <div className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Step 3</p>
                    <h4 className="text-sm font-bold text-white">Zone 4 Action Check</h4>
                  </div>
                </div>
                <span className="mt-3 inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  In Review
                </span>
              </div>

              <div className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center border border-slate-700">
                    <FileBadge className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Step 4</p>
                    <h4 className="text-sm font-bold text-white">CSR Certificate</h4>
                  </div>
                </div>
                <span className="mt-3 inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 text-slate-400">
                  Pending Step 3
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-slate-900/70 rounded-3xl border border-slate-800 p-6 space-y-4">
                <h3 className="font-bold text-white flex items-center">
                  <ListChecks className="w-4 h-4 text-emerald-400 mr-2" /> Admin Audit Compliance Log
                </h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-bold text-white">Quarterly Citizen Coupon Disbursement Audit</p>
                      <p className="text-xs text-slate-400 mt-0.5">Admin verified 1,450 coupon vouchers distributed to verified users.</p>
                      <span className="text-[11px] text-slate-500 mt-2 block">Audited by: Lead Admin • 2 days ago</span>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Passed
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-bold text-white">Zone 4 Tree Plantation Campaign Sponsorship</p>
                      <p className="text-xs text-slate-400 mt-0.5">AI image verification proof submitted to Admin panel.</p>
                      <span className="text-[11px] text-slate-500 mt-2 block">Audited by: AI Decision Model + Admin</span>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      Reviewing
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Admin Inquiry Form */}
              <div className="bg-slate-900/70 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white mb-2 flex items-center">
                    <MessageSquare className="w-4 h-4 text-emerald-400 mr-2" /> Direct Admin Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">Send verification documents or compliance inquiries directly to the Org Admin.</p>
                  
                  {inquirySuccess && (
                    <div className="mb-3 p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-xs text-emerald-400 font-semibold flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Message delivered to Organization Admin!
                    </div>
                  )}

                  <textarea
                    rows={4}
                    value={adminInquiryText}
                    onChange={(e) => setAdminInquiryText(e.target.value)}
                    placeholder="Type message to Org Admin regarding coupon pool or audit verification..."
                    className="w-full text-xs p-3 rounded-2xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                  ></textarea>
                </div>
                <button
                  onClick={handleSendInquiry}
                  className="w-full mt-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition shadow-lg shadow-emerald-500/20 flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5 mr-2" /> Send Inquiry to Admin
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Modal: Create Coupon */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Release New Reward Coupon</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddCoupon} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-300 mb-1">Coupon Title</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. 25% Off Solar Goods"
                  required
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Citizen Points Needed</label>
                  <input
                    type="number"
                    value={newPoints}
                    onChange={(e) => setNewPoints(Number(e.target.value))}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Discount Value</label>
                  <input
                    type="text"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold text-slate-300 mb-1">Total Coupons to Release</label>
                <input
                  type="number"
                  value={newTotal}
                  onChange={(e) => setNewTotal(Number(e.target.value))}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>
              <div className="flex justify-end space-x-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 font-semibold text-slate-400 hover:text-white rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl shadow-lg shadow-emerald-500/20"
                >
                  Release Coupon
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Edit Company Profile */}
      {showEditProfileModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Edit Company Profile</h3>
              <button onClick={() => setShowEditProfileModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-xs max-h-[70vh] overflow-y-auto pr-1">
              <div>
                <label className="block font-semibold text-slate-300 mb-1">Company Name</label>
                <input
                  type="text"
                  value={companyInfo.name}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-300 mb-1">CSR Bio & Mission</label>
                <textarea
                  rows={3}
                  value={companyInfo.bio}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, bio: e.target.value })}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Sector</label>
                  <input
                    type="text"
                    value={companyInfo.sector}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, sector: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Headquarters</label>
                  <input
                    type="text"
                    value={companyInfo.hq}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, hq: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Representative</label>
                  <input
                    type="text"
                    value={companyInfo.representative}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, representative: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Annual CSR Budget</label>
                  <input
                    type="text"
                    value={companyInfo.annualBudget}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, annualBudget: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setShowEditProfileModal(false)}
                className="px-4 py-2 font-semibold text-slate-400 hover:text-white rounded-xl"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setShowEditProfileModal(false)}
                className="px-4 py-2 font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl shadow-lg"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        EcoSphere Network • Company CSR & Rewards Portal • Walkover Hackathon 2026
      </footer>
    </div>
  );
}
