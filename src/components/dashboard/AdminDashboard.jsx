import React, { useState, useEffect } from 'react';
import { Database, Plus, CheckCircle2, ShieldAlert, FileText, Search, UserCheck } from 'lucide-react';
import { DATASET_METADATA } from '../../data/islDatabase.js';

export default function AdminDashboard({ lang }) {
  const [datasets, setDatasets] = useState(DATASET_METADATA);
  const [activeTab, setActiveTab] = useState('dataset'); // 'dataset', 'signs', 'users'

  return (
    <div className="space-y-6 pb-10">
      {/* Admin Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-6 text-white shadow-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl font-black text-white">SignBridge India — Master Admin Panel</h2>
          </div>
          <p className="text-xs text-slate-300">ISL Dataset Metadata, Verified Signs & System Management</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center gap-1.5 transition-all">
            <Plus className="w-4 h-4" />
            <span>Add New Sign</span>
          </button>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-2 border border-slate-200 text-xs font-black">
        <button
          onClick={() => setActiveTab('dataset')}
          className={`flex-1 py-2 rounded-xl transition-all ${
            activeTab === 'dataset' ? 'bg-blue-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          AI Dataset Metadata
        </button>
        <button
          onClick={() => setActiveTab('signs')}
          className={`flex-1 py-2 rounded-xl transition-all ${
            activeTab === 'signs' ? 'bg-blue-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Verified Signs Registry
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`flex-1 py-2 rounded-xl transition-all ${
            activeTab === 'users' ? 'bg-blue-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          User & Institution Logs
        </button>
      </div>

      {/* DATASET METADATA TABLE */}
      {activeTab === 'dataset' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-slate-900 text-base">ISL AI Training Dataset Metadata</h3>
            <span className="text-xs font-bold text-slate-500">8 Verified Sign Dataset Packages</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-extrabold border-y border-slate-200">
                <tr>
                  <th className="p-3">Sign Label</th>
                  <th className="p-3">Video Samples</th>
                  <th className="p-3">Camera Angles</th>
                  <th className="p-3">License Status</th>
                  <th className="p-3">Verification Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {datasets.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-all">
                    <td className="p-3 font-bold text-slate-900">{item.sign}</td>
                    <td className="p-3 font-mono font-bold text-blue-700">{item.samples} videos</td>
                    <td className="p-3 text-slate-600">{item.angles} angles</td>
                    <td className="p-3">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md font-mono text-[10px]">
                        {item.license}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-black text-[10px]">
                        ✓ {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VERIFIED SIGNS TAB */}
      {activeTab === 'signs' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-3">
          <h3 className="font-extrabold text-slate-900 text-base">Verified ISL Dictionary Management</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            All learning content is reviewed by ISL educators and Deaf Community experts. Metadata includes source attribution, license status, and verified reviewer names.
          </p>
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-900">
            ✓ 45 signs currently verified with 0 unreviewed submissions.
          </div>
        </div>
      )}

      {/* USERS TAB */}
      {activeTab === 'users' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-3">
          <h3 className="font-extrabold text-slate-900 text-base">User System Logs</h3>
          <p className="text-xs text-slate-600">Active learners: 348 | Certified users: 184 | Active Institutions: 12</p>
        </div>
      )}
    </div>
  );
}
