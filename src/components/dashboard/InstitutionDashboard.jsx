import React, { useState, useEffect } from 'react';
import { Building2, Users, Award, ShieldCheck, CheckCircle2, TrendingUp, Search, Filter } from 'lucide-react';

export default function InstitutionDashboard({ lang }) {
  const [data, setData] = useState({
    institution: {
      name: 'Government General Hospital, Chennai',
      location: 'Chennai, Tamil Nadu',
      institution_type: 'Healthcare',
      is_service_point_ready: true,
      service_point_badge: 'ISL-Ready Service Point ✓'
    },
    stats: {
      total_employees: 25,
      registered: 22,
      currently_learning: 5,
      completed: 17,
      certified_count: 17,
      average_score: 86.4
    },
    staff_table: [
      { id: 1, name: 'Dr. Rajesh Kumar', department: 'Emergency Casualty', progress: 100, score: 89.5, status: 'Certified ✓' },
      { id: 2, name: 'Nurse Priya Nair', department: 'Outpatient Clinic', progress: 72, score: 81.0, status: 'In Progress' },
      { id: 3, name: 'Staff Receptionist Suresh', department: 'Front Desk', progress: 100, score: 94.0, status: 'Certified ✓' },
      { id: 4, name: 'Officer Anitha Ramesh', department: 'Triage Desk', progress: 100, score: 87.5, status: 'Certified ✓' },
      { id: 5, name: 'Pharmacist Karthik', department: 'Pharmacy', progress: 45, score: 76.0, status: 'In Progress' }
    ]
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/institution/dashboard')
      .then((res) => res.json())
      .then((resData) => {
        if (resData.institution) {
          setData(resData);
        }
      })
      .catch(() => {
        // use default state
      });
  }, []);

  const filteredStaff = data.staff_table.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-10">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 rounded-3xl p-6 text-white shadow-xl border border-blue-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl font-black text-white">{data.institution.name}</h2>
          </div>
          <p className="text-xs text-blue-200">{data.institution.location} • {data.institution.institution_type} Service Portal</p>
        </div>

        {/* ISL-Ready Service Point Badge */}
        <div className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-black px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-inner">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>{data.institution.service_point_badge}</span>
        </div>
      </div>

      {/* KPI Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Total Employees</span>
          <p className="text-2xl font-black text-slate-900">{data.stats.total_employees}</p>
          <span className="text-[10px] font-bold text-emerald-600">✓ {data.stats.registered} Enrolled</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Certified Personnel</span>
          <p className="text-2xl font-black text-blue-700">{data.stats.certified_count}</p>
          <span className="text-[10px] font-bold text-blue-600">ISL Competent</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Currently Learning</span>
          <p className="text-2xl font-black text-amber-600">{data.stats.currently_learning}</p>
          <span className="text-[10px] font-bold text-amber-600">Active Lessons</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Average Score</span>
          <p className="text-2xl font-black text-emerald-600">{data.stats.average_score}%</p>
          <span className="text-[10px] font-bold text-slate-500">Passing Grade: 75%</span>
        </div>
      </div>

      {/* Criteria Card */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-4 text-xs space-y-2">
        <h4 className="font-extrabold text-blue-900 flex items-center gap-1.5 text-sm">
          <ShieldCheck className="w-4 h-4 text-blue-700" />
          ISL-Ready Service Point Criteria
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-700 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Min 60% Staff Trained (Current: 68%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Avg Competency &gt; 80% (Current: 86.4%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Emergency Front Desk ISL Ready</span>
          </div>
        </div>
      </div>

      {/* Employee Progress Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden space-y-4 p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <h3 className="font-extrabold text-slate-900 text-base">Employee Progress & Certification Log</h3>
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search staff or department..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-extrabold border-y border-slate-200">
              <tr>
                <th className="p-3">Employee Name</th>
                <th className="p-3">Department</th>
                <th className="p-3">Progress</th>
                <th className="p-3">Score</th>
                <th className="p-3">Certificate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStaff.map((staff) => (
                <tr key={staff.id} className="hover:bg-slate-50/80 transition-all">
                  <td className="p-3 font-bold text-slate-900">{staff.name}</td>
                  <td className="p-3 text-slate-600">{staff.department}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-blue-600 h-full rounded-full"
                          style={{ width: `${staff.progress}%` }}
                        ></div>
                      </div>
                      <span className="font-extrabold text-slate-700">{staff.progress}%</span>
                    </div>
                  </td>
                  <td className="p-3 font-bold text-emerald-700">{staff.score}%</td>
                  <td className="p-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-black ${
                        staff.status.includes('Certified')
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {staff.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
