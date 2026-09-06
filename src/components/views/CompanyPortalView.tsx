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
  Wind,
  Calculator,
  Search
} from 'lucide-react';

export const CompanyPortalView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'profile' | 'coupons' | 'csr' | 'admin-check'>('profile');
  const [showModal, setShowModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showAuditModal, setShowAuditModal] = useState(false);
  const [adminInquiryText, setAdminInquiryText] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [couponSearch, setCouponSearch] = useState('');
  const [calcPoints, setCalcPoints] = useState(200);

  // Step 3 Admin Verification Simulation
  const [step3Approved, setStep3Approved] = useState(false);

  // CSR Leaderboard Scope & Score
  const [csrScope, setCsrScope] = useState<'city' | 'state' | 'national'>('city');
  const [csrScore, setCsrScore] = useState(9420);
  const [isRankBoosted, setIsRankBoosted] = useState(false);

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
    citizensRewarded: 4820,
    treesFunded: 1240,
    co2Offset: 18.4
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

  // Audits State
  const [auditLogs, setAuditLogs] = useState([
    {
      id: '1',
      title: 'Quarterly Citizen Coupon Disbursement Audit',
      desc: 'Admin verified 1,450 coupon vouchers distributed to verified citizens.',
      auditor: 'Audited by: Lead Admin • 2 days ago',
      status: 'Passed',
      statusClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
    },
    {
      id: '2',
      title: 'Zone 4 Tree Plantation Campaign Sponsorship',
      desc: 'AI image verification proof submitted to Admin panel.',
      auditor: 'Audited by: AI Decision Model + Admin',
      status: 'Reviewing',
      statusClass: 'bg-amber-500/20 text-amber-400 border-amber-500/30'
    }
  ]);

  const [newAuditTitle, setNewAuditTitle] = useState('');
  const [newAuditAuthority, setNewAuditAuthority] = useState('Municipal Environmental Board');
  const [newAuditNotes, setNewAuditNotes] = useState('');

  // Leaderboard data
  const leaderboards = {
    city: [
      { rank: 1, name: 'Infosys Green Initiative Foundation', stats: 'Sponsored: 3,200 Cleanups • 12 Zones Active', pts: '12,850 pts', tier: 'Tier 1 Platinum', isUser: false },
      { rank: isRankBoosted ? 3 : 2, name: 'Reliance Foundation Eco-Drive', stats: 'Sponsored: 2,890 Cleanups • 9 Zones Active', pts: '9,870 pts', tier: 'Tier 1 Gold', isUser: false },
      { rank: isRankBoosted ? 2 : 3, name: `${companyInfo.name} (You)`, stats: 'Sponsored: 2,450 Cleanups • 8 Zones Active', pts: `${csrScore.toLocaleString()} pts`, tier: 'Tier 1 Gold', isUser: true },
      { rank: 4, name: 'Wipro Earthian Network', stats: 'Sponsored: 1,980 Cleanups • 6 Zones Active', pts: '8,100 pts', tier: 'Tier 2 Silver', isUser: false }
    ],
    state: [
      { rank: 1, name: 'Adani Green Maharashtra Clean Hub', stats: 'Sponsored: 8,400 Cleanups • 34 Zones', pts: '24,150 pts', tier: 'Tier 1 Platinum', isUser: false },
      { rank: 2, name: 'Mahindra Eco-Mobility Mission', stats: 'Sponsored: 6,100 Cleanups • 28 Zones', pts: '18,300 pts', tier: 'Tier 1 Platinum', isUser: false },
      { rank: 3, name: `${companyInfo.name} (You)`, stats: 'Sponsored: 2,450 Cleanups • 8 Zones', pts: `${csrScore.toLocaleString()} pts`, tier: 'Tier 1 Gold', isUser: true },
      { rank: 4, name: 'Godrej Good & Green Fund', stats: 'Sponsored: 2,100 Cleanups • 7 Zones', pts: '9,120 pts', tier: 'Tier 1 Gold', isUser: false }
    ],
    national: [
      { rank: 1, name: 'ITC Mission Sunehra Kal', stats: 'Sponsored: 42,000 Cleanups • 120 Cities', pts: '115,000 pts', tier: 'Tier 1 Platinum', isUser: false },
      { rank: 2, name: 'Tata Trusts Pan-India Eco Net', stats: 'Sponsored: 38,500 Cleanups • 95 Cities', pts: '98,000 pts', tier: 'Tier 1 Platinum', isUser: false },
      { rank: 8, name: `${companyInfo.name} (You)`, stats: 'Sponsored: 2,450 Cleanups • 8 Zones', pts: `${csrScore.toLocaleString()} pts`, tier: 'Tier 1 Gold', isUser: true }
    ]
  };

  const handleAddCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    setCouponList([
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
      },
      ...couponList
    ]);
    setShowModal(false);
    setNewTitle('');
  };

  const handleRefillCoupon = (id: string) => {
    setCouponList(
      couponList.map((c) => (c.id === id ? { ...c, total: c.total + 200, status: 'Active' } : c))
    );
  };

  const handleToggleCoupon = (id: string) => {
    setCouponList(
      couponList.map((c) =>
        c.id === id ? { ...c, status: c.status === 'Active' ? 'Paused' : 'Active' } : c
      )
    );
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

  const handleSubmitAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuditTitle) return;
    setAuditLogs([
      {
        id: Date.now().toString(),
        title: newAuditTitle,
        desc: newAuditNotes || 'Audit request submitted for verification.',
        auditor: `Audited by: ${newAuditAuthority} • Just now`,
        status: 'Submitted',
        statusClass: 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
      },
      ...auditLogs
    ]);
    setShowAuditModal(false);
    setNewAuditTitle('');
    setNewAuditNotes('');
  };

  const handleSimulateAdminPass = () => {
    setStep3Approved(true);
    setAuditLogs(
      auditLogs.map((a) =>
        a.id === '2'
          ? {
              ...a,
              status: 'Passed',
              statusClass: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
            }
          : a
      )
    );
  };

  const handleBoostRank = () => {
    setCsrScore((prev) => prev + 800);
    setIsRankBoosted(true);
  };

  const filteredCoupons = couponList.filter(
    (c) =>
      c.title.toLowerCase().includes(couponSearch.toLowerCase()) ||
      c.value.toLowerCase().includes(couponSearch.toLowerCase())
  );

  return (
    <div className="space-y-6 text-slate-100">
      {/* Header */}
      <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg shadow-emerald-500/20">
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl sm:text-3xl font-black text-white">Company Portal</h1>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-0.5 rounded-full font-bold">
                Verified CSR Partner
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Corporate Social Responsibility (CSR) & Citizen Green Rewards Management Hub
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950/80 border border-slate-800 p-1.5 rounded-2xl text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab('profile')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
              activeSubTab === 'profile'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>1. Profile</span>
          </button>
          <button
            onClick={() => setActiveSubTab('coupons')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
              activeSubTab === 'coupons'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Ticket className="w-4 h-4" />
            <span>2. Points & Coupons</span>
          </button>
          <button
            onClick={() => setActiveSubTab('csr')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
              activeSubTab === 'csr'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>3. CSR Rank</span>
          </button>
          <button
            onClick={() => setActiveSubTab('admin-check')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
              activeSubTab === 'admin-check'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>4. Admin Check</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">CSR Tier</p>
            <h3 className="text-2xl font-black text-white mt-1">Tier 1 (Gold)</h3>
            <p className="text-xs text-emerald-400 font-medium mt-1 flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-1" /> Top 5% in Region
            </p>
          </div>
          <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center border border-amber-500/20 shadow-inner">
            <Medal className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Coupons</p>
            <h3 className="text-2xl font-black text-white mt-1">1,450 Issued</h3>
            <p className="text-xs text-slate-400 font-medium mt-1">980 Claimed by Citizens</p>
          </div>
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-inner">
            <Ticket className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Points Pool Funded</p>
            <h3 className="text-2xl font-black text-white mt-1">320,000 pts</h3>
            <p className="text-xs text-emerald-400 font-medium mt-1 flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> ₹1.6 Lakhs Value
            </p>
          </div>
          <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-inner">
            <Coins className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Admin Status</p>
            <h3 className="text-2xl font-black text-emerald-400 mt-1">Verified Org</h3>
            <p className="text-xs text-slate-400 font-medium mt-1">Audit synced 2 hrs ago</p>
          </div>
          <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center border border-purple-500/20 shadow-inner">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* SECTION 1: PROFILE */}
      {activeSubTab === 'profile' && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg">
                {companyInfo.name.split(' ').map((w) => w[0]).slice(0, 2).join('') || 'TP'}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{companyInfo.name}</h2>
                <p className="text-sm text-slate-400 mt-0.5">Registration: {companyInfo.cin} • Sector: {companyInfo.sector}</p>
              </div>
            </div>
            <button
              onClick={() => setShowEditProfileModal(true)}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition flex items-center self-start shadow-md shadow-emerald-500/20"
            >
              <Edit3 className="w-3.5 h-3.5 mr-2" /> Edit Info
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
                  <p className="text-xs text-slate-400 font-medium">CSR Representative</p>
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

            <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center">
                <Sparkles className="w-4 h-4 text-emerald-400 mr-2" /> Corporate Highlights
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Active Zone Sponsored:</span>
                  <span className="font-bold text-white">{companyInfo.zone}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Citizens Rewarded:</span>
                  <span className="font-bold text-white">{companyInfo.citizensRewarded.toLocaleString()} Citizens</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Trees Planted Funded:</span>
                  <span className="font-bold text-emerald-400">{companyInfo.treesFunded.toLocaleString()} Trees</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Carbon Offset Estimate:</span>
                  <span className="font-bold text-emerald-400">{companyInfo.co2Offset} Tons CO₂e</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: USER POINT & COUPON RELEASE */}
      {activeSubTab === 'coupons' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">User Point & Coupon Release Management</h2>
              <p className="text-sm text-slate-400">Configure point conversion ratios and issue reward perks for citizen actions.</p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition flex items-center shadow-lg shadow-emerald-500/20"
            >
              <PlusCircle className="w-4 h-4 mr-2" /> Release New Coupon
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 font-semibold uppercase">Exchange Rate</span>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-lg font-black text-white">100 Green Points</span>
                <span className="text-slate-500">=</span>
                <span className="text-lg font-black text-emerald-400">₹50 Voucher</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">Earned by citizens from pollution & waste tasks.</p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 font-semibold uppercase">Coupon Budget Pool</span>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-lg font-black text-white">₹ 1,50,000</span>
                <span className="text-xs text-slate-400">65% used</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-2 mt-3 overflow-hidden border border-slate-800">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 font-semibold uppercase">Distribution Mode</span>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-black text-white">Instant Release</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Active
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">Auto-approved for verified cleanup tasks.</p>
            </div>
          </div>

          {/* Point to Voucher Calculator */}
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Citizen Point-to-Voucher Calculator</h4>
                <p className="text-[11px] text-slate-400">Simulate how citizen green points translate to sponsor vouchers.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <input
                type="number"
                value={calcPoints}
                onChange={(e) => setCalcPoints(Number(e.target.value))}
                className="p-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white w-28 text-center font-bold"
              />
              <span className="text-xs text-slate-400">Points =</span>
              <div className="px-3 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold text-xs rounded-xl">
                ₹{Math.floor(calcPoints * 0.5)} Discount Value
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="px-6 py-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-white">Issued Coupon Campaigns</h3>
                <span className="text-xs bg-slate-800 text-slate-400 px-2.5 py-0.5 rounded-full">{filteredCoupons.length} Active</span>
              </div>
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
                <input
                  type="text"
                  value={couponSearch}
                  onChange={(e) => setCouponSearch(e.target.value)}
                  placeholder="Search coupon..."
                  className="text-xs bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 w-48"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-950/60 text-xs uppercase text-slate-400 font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-3">Offer Title</th>
                    <th className="px-6 py-3">Points Cost</th>
                    <th className="px-6 py-3">Discount Value</th>
                    <th className="px-6 py-3">Claimed / Total</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredCoupons.map((c) => {
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
                        <td className="px-6 py-4 text-right">
                          {c.status === 'Exhausted' ? (
                            <button
                              onClick={() => handleRefillCoupon(c.id)}
                              className="text-xs font-bold text-emerald-400 hover:underline"
                            >
                              Refill
                            </button>
                          ) : (
                            <button
                              onClick={() => handleToggleCoupon(c.id)}
                              className="text-xs text-slate-400 hover:text-white font-medium"
                            >
                              Toggle
                            </button>
                          )}
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

      {/* SECTION 3: CSR RANK */}
      {activeSubTab === 'csr' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">Corporate Social Responsibility (CSR) Leaderboard</h2>
              <p className="text-sm text-slate-400">Track your company's regional ranking, environmental impact index, and government recognition scores.</p>
            </div>
            <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setCsrScope('city')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  csrScope === 'city' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                City-Wide
              </button>
              <button
                onClick={() => setCsrScope('state')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  csrScope === 'state' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                State-Wide
              </button>
              <button
                onClick={() => setCsrScope('national')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  csrScope === 'national' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                National
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-950 via-emerald-950/40 to-slate-950 border border-emerald-500/30 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <Flame className="w-3.5 h-3.5 mr-1 text-amber-400" />
                  {isRankBoosted ? 'Rank #2 Overall Leaderboard (Promoted!)' : 'Rank #3 Overall Leaderboard'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{companyInfo.name}</h3>
                <p className="text-sm text-slate-300 max-w-xl">
                  {isRankBoosted
                    ? 'Congratulations! By sponsoring the East Metropolis Zone Cleanliness Drive, your corporate CSR ranking jumped to Rank #2!'
                    : 'You are just 450 CSR points away from reaching Rank #2. Sponsoring the upcoming East Metropolis Zone Cleanliness Drive will earn 800 bonus CSR points!'}
                </p>
                {!isRankBoosted && (
                  <div className="pt-2">
                    <button
                      onClick={handleBoostRank}
                      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg hover:brightness-110 transition flex items-center"
                    >
                      <Sparkles className="w-3.5 h-3.5 mr-1.5 text-slate-950" /> Sponsor Zone 4 Drive (+800 CSR pts)
                    </button>
                  </div>
                )}
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-800 text-center min-w-[180px]">
                <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">CSR Score</span>
                <div className="text-4xl font-black text-emerald-400 mt-1">{csrScore.toLocaleString()}</div>
                <span className="text-xs text-emerald-400 mt-1 block">▲ +12% this month</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-white">Regional Corporate CSR Standings ({csrScope.toUpperCase()})</h3>
              <span className="text-xs text-slate-400">Updated Daily</span>
            </div>
            <div className="divide-y divide-slate-800">
              {leaderboards[csrScope].map((item) => (
                <div
                  key={item.name}
                  className={`px-6 py-4 flex items-center justify-between transition ${
                    item.isUser ? 'bg-emerald-950/30 border-l-4 border-emerald-500' : 'hover:bg-slate-800/30'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-sm ${
                        item.rank === 1
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : item.rank === 2
                          ? 'bg-slate-800 text-slate-300'
                          : item.isUser
                          ? 'bg-emerald-500 text-slate-950 font-black'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {item.rank}
                    </span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className={`text-sm font-bold ${item.isUser ? 'text-emerald-300' : 'text-white'}`}>
                          {item.name}
                        </h4>
                        {item.isUser && (
                          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">
                            You
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">{item.stats}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm font-bold ${item.isUser ? 'text-emerald-400' : 'text-white'}`}>
                      {item.pts}
                    </span>
                    <span className="text-xs text-slate-500 block">{item.tier}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: ADMIN CHECK */}
      {activeSubTab === 'admin-check' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">Company to Organization (Admin) Check & Compliance</h2>
              <p className="text-sm text-slate-400">Direct verification pipeline with Municipal Authorities, Hackathon Organizers, and Administrative Regulators.</p>
            </div>
            <button
              onClick={() => setShowAuditModal(true)}
              className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition shadow-lg shadow-emerald-500/20 flex items-center"
            >
              <FileCheck className="w-4 h-4 mr-2" /> Submit CSR Audit Request
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 shadow-sm">
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

            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 shadow-sm">
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

            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 shadow-sm">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                    step3Approved
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                  }`}
                >
                  {step3Approved ? <Check className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Step 3</p>
                  <h4 className="text-sm font-bold text-white">Zone 4 Action Check</h4>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                    step3Approved
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                  }`}
                >
                  {step3Approved ? 'Approved by Admin' : 'In Review'}
                </span>
                {!step3Approved && (
                  <button
                    onClick={handleSimulateAdminPass}
                    className="text-[10px] text-emerald-400 hover:underline font-bold"
                  >
                    [Simulate Admin Pass]
                  </button>
                )}
              </div>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 shadow-sm">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                    step3Approved
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  <FileBadge className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Step 4</p>
                  <h4 className="text-sm font-bold text-white">CSR Certificate</h4>
                </div>
              </div>
              <span
                className={`mt-3 inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                  step3Approved
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                {step3Approved ? 'Verified & Issued' : 'Pending Step 3'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-900/60 rounded-3xl border border-slate-800 p-6 space-y-4 shadow-xl">
              <h3 className="font-bold text-white flex items-center">
                <ListChecks className="w-4 h-4 text-emerald-400 mr-2" /> Admin Audit Compliance Log
              </h3>
              <div className="space-y-3">
                {auditLogs.map((log) => (
                  <div
                    key={log.id}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start justify-between"
                  >
                    <div>
                      <p className="text-sm font-bold text-white">{log.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{log.desc}</p>
                      <span className="text-[11px] text-slate-500 mt-2 block">{log.auditor}</span>
                    </div>
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${log.statusClass}`}>
                      {log.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Admin Inquiry Form */}
            <div className="bg-slate-900/60 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="font-bold text-white mb-2 flex items-center">
                  <MessageSquare className="w-4 h-4 text-emerald-400 mr-2" /> Direct Admin Inquiry
                </h3>
                <p className="text-xs text-slate-400 mb-4">Send verification documents or compliance inquiries to the Admin.</p>
                
                {inquirySuccess && (
                  <div className="mb-3 p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-xs text-emerald-400 font-semibold flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Message delivered to Organization Admin!
                  </div>
                )}

                <textarea
                  rows={4}
                  value={adminInquiryText}
                  onChange={(e) => setAdminInquiryText(e.target.value)}
                  placeholder="Type message to Org Admin..."
                  className="w-full text-xs p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
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

      {/* Modal: Release Coupon */}
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

      {/* Modal: Edit Profile */}
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

      {/* Modal: Submit CSR Audit */}
      {showAuditModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Submit CSR Audit Request</h3>
              <button onClick={() => setShowAuditModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmitAudit} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-300 mb-1">Audit Subject</label>
                <input
                  type="text"
                  value={newAuditTitle}
                  onChange={(e) => setNewAuditTitle(e.target.value)}
                  placeholder="e.g. Zone 4 Tree Plantation Proof Audit"
                  required
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-300 mb-1">Target Authority</label>
                <select
                  value={newAuditAuthority}
                  onChange={(e) => setNewAuditAuthority(e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                >
                  <option>Municipal Environmental Board</option>
                  <option>Hackathon Admin Compliance Desk</option>
                  <option>Central Pollution Control Board (CPCB)</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-slate-300 mb-1">Supporting Notes / Link</label>
                <textarea
                  rows={3}
                  value={newAuditNotes}
                  onChange={(e) => setNewAuditNotes(e.target.value)}
                  placeholder="Explain verification requirements or attach report ID..."
                  required
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAuditModal(false)}
                  className="px-4 py-2 font-semibold text-slate-400 hover:text-white rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl shadow-lg"
                >
                  Submit for Verification
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
