import React, { useState, useEffect } from 'react';
import '../index.css';
import confetti from 'canvas-confetti';

export default function ContactPage({ initialProduct, docketItems = [] }) {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    discipline: '',
    narrative: '',
    channel: 'whatsapp'
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submissionDocketNo, setSubmissionDocketNo] = useState('');

  // Pre-fill if navigated with a specific piece or docket items
  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        discipline: initialProduct.category === 'preservation' ? 'flower' :
                    initialProduct.category === 'platters' ? 'engagement' :
                    initialProduct.category === 'wearables' ? 'pendant' : 'memory',
        narrative: `Inquiring about bespoke commission for ${initialProduct.title} (${initialProduct.refNo}).`
      }));
    } else if (docketItems.length > 0) {
      const itemsList = docketItems.map(d => `${d.title} (${d.archiveNo})`).join(', ');
      setFormData((prev) => ({
        ...prev,
        narrative: `Inquiring about the following items from my commission docket: ${itemsList}.`
      }));
    }
  }, [initialProduct, docketItems]);

  const handleFileUpload = (e) => {
    if (e.target.files) {
      const filesArr = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB',
        preview: URL.createObjectURL(file)
      }));
      setUploadedFiles((prev) => [...prev, ...filesArr]);
    }
  };

  const removeFile = (idx) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const docketId = 'AEN-' + Math.floor(100000 + Math.random() * 900000);
    setSubmissionDocketNo(docketId);
    setSubmitted(true);

    // Trigger golden botanical confetti
    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c89b4b', '#f0bf6b', '#171513', '#a6a58c', '#ffffff']
      });
    } catch {
      // fallback safe
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      tel: '',
      email: '',
      discipline: '',
      narrative: '',
      channel: 'whatsapp'
    });
    setUploadedFiles([]);
  };

  return (
    <div className="w-full flex flex-col pt-4 sm:pt-8">
      
      {/* Archival Header & Spatial Introduction */}
      <section className="relative w-full max-w-atelier mx-auto px-atelier pt-6 pb-8">
        <div className="flex flex-col lg:flex-row items-baseline justify-between gap-6 border-b border-outline-variant/30 pb-8">
          <div className="max-w-3xl">
            <span className="font-label-caps uppercase tracking-[0.25em] text-secondary flex items-center gap-2 mb-3">
              <span className="inline-block w-6 h-[1px] bg-secondary"></span>
              Bespoke Atelier Commissioning
            </span>
            <h1 className="font-display-xl text-on-surface leading-[1.08] tracking-tight">
              LET’S CREATE<br />
              <span className="italic font-normal text-secondary">SOMETHING MEANINGFUL.</span>
            </h1>
          </div>
          <div className="max-w-sm">
            <p className="font-body-lg text-on-surface-variant font-light leading-relaxed">
              Have an idea, wedding memory or special occasion in mind? Tell us about it. Every bloom, vow, and golden leaf is sealed in museum-grade archival clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial 2-Column Commission Canvas */}
      <section className="w-full max-w-atelier mx-auto px-atelier pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Bespoke Custom Enquiry Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-10 border border-outline-variant/30 shadow-sm">
            
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-8">
              <div>
                <span className="font-label-caps text-[10px] uppercase tracking-[0.2em] text-secondary">
                  Folio No. 2026/C
                </span>
                <h2 className="font-headline-sm text-on-surface mt-1 text-[20px]">
                  Bespoke Inquiry Docket
                </h2>
              </div>
              <span className="font-label-sm text-on-surface-variant font-light tracking-wider text-[11px]">
                Archival Series
              </span>
            </div>

            {submitted ? (
              <div className="p-8 bg-surface-container-low border border-secondary/40 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-[36px]">verified</span>
                </div>
                <span className="font-label-caps text-secondary text-[11px] tracking-widest uppercase block">
                  Dossier Confirmed
                </span>
                <h3 className="font-headline-md text-on-surface text-[24px]">
                  Inquiry Docket #{submissionDocketNo}
                </h3>
                <p className="font-body-md text-on-surface-variant font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-on-surface font-medium">{formData.name}</strong>. Our principal resin artisan is reviewing your ceremony details. A dedicated WhatsApp concierge thread will be initiated shortly at <strong>+91 {formData.tel}</strong>.
                </p>

                <div className="p-4 bg-surface max-w-sm mx-auto border border-outline-variant/30 text-left font-body-sm text-[13px] space-y-1">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Patron:</span>
                    <span className="text-on-surface font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Channel:</span>
                    <span className="text-on-surface font-medium capitalize">{formData.channel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Status:</span>
                    <span className="text-secondary font-medium">Under Studio Evaluation</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/919876543210?text=Hello%20Aenon%20Resin%20Arts!%20I%20just%20submitted%20Inquiry%20Docket%20${submissionDocketNo}%20for%20${encodeURIComponent(formData.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-atelier-primary py-3 px-6 text-[10px] text-decoration-none"
                  >
                    Open in WhatsApp Now
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn-atelier-outline py-3 px-6 text-[10px]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <label className="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider" htmlFor="client-name">
                      Full Name *
                    </label>
                    <span className="font-label-sm text-secondary text-[11px]">Patron</span>
                  </div>
                  <input
                    id="client-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lady Vivienne Montgomery"
                    className="w-full bg-surface-container-low px-4 py-3.5 font-body-md text-on-surface placeholder:text-on-surface-variant/40 border border-outline-variant/40 focus:border-secondary outline-none transition-all"
                  />
                </div>

                {/* Dual Contact Row: WhatsApp + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-baseline">
                      <label className="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider" htmlFor="client-tel">
                        WhatsApp Number *
                      </label>
                      <span className="font-label-sm text-secondary font-light text-[11px]">+91 priority line</span>
                    </div>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 font-body-sm text-on-surface-variant/70 select-none">
                        +91
                      </span>
                      <input
                        id="client-tel"
                        required
                        type="tel"
                        value={formData.tel}
                        onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
                        placeholder="98765 00000"
                        className="w-full bg-surface-container-low pl-14 pr-4 py-3.5 font-body-md text-on-surface placeholder:text-on-surface-variant/40 border border-outline-variant/40 focus:border-secondary outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-baseline">
                      <label className="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider" htmlFor="client-email">
                        Email Address *
                      </label>
                      <span className="font-label-sm text-on-surface-variant/60 font-light text-[11px]">Digital Dossier</span>
                    </div>
                    <input
                      id="client-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vivienne@domain.com"
                      className="w-full bg-surface-container-low px-4 py-3.5 font-body-md text-on-surface placeholder:text-on-surface-variant/40 border border-outline-variant/40 focus:border-secondary outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Commission Type Dropdown */}
                <div className="space-y-1.5">
                  <label className="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider" htmlFor="creation-type">
                    What would you like to create? *
                  </label>
                  <div className="relative">
                    <select
                      id="creation-type"
                      required
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full appearance-none bg-surface-container-low px-4 py-3.5 pr-10 font-body-md text-on-surface border border-outline-variant/40 focus:border-secondary outline-none cursor-pointer"
                    >
                      <option value="" disabled>Select Commission Discipline...</option>
                      <option value="flower">Flower Garland Preservation (Bridal &amp; Ceremonial Varmala)</option>
                      <option value="memory">Memory Preservation Cube / Block (Sentimental Keepsakes &amp; Vows)</option>
                      <option value="engagement">Engagement Ring Platter &amp; Nuptial Display Tray</option>
                      <option value="pendant">Fine Heirloom Pendant &amp; Wearable Botanical</option>
                      <option value="keychain">Bespoke Monogram Keychain / Charm</option>
                      <option value="welcome">Architectural Welcome Board &amp; Easel Art</option>
                      <option value="newborn">New Born Milestone Memory Frame &amp; First Blooms</option>
                      <option value="coasters">Botanical Coaster Set (Set of Four / Six)</option>
                      <option value="dome">Sacred Varmala Dome (Full 3D Statement Dome)</option>
                      <option value="other">Other Bespoke Spatial Exploration</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[20px]">
                      arrow_drop_down
                    </span>
                  </div>
                </div>

                {/* Narrative Idea */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <label className="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider" htmlFor="client-narrative">
                      Tell Us About Your Idea *
                    </label>
                    <span className="font-label-sm text-on-surface-variant/60 font-light text-[11px]">
                      Dimensions, colors &amp; significance
                    </span>
                  </div>
                  <textarea
                    id="client-narrative"
                    required
                    rows={4}
                    value={formData.narrative}
                    onChange={(e) => setFormData({ ...formData, narrative: e.target.value })}
                    placeholder="Describe the ceremony florals, auspicious dates, preferred metallic leafing (24K Gold, Rose, Silver), or timber base preferences..."
                    className="w-full bg-surface-container-low p-4 font-body-md text-on-surface placeholder:text-on-surface-variant/40 border border-outline-variant/40 focus:border-secondary outline-none transition-all resize-y"
                  ></textarea>
                </div>

                {/* Minimalist File Upload Simulation */}
                <div className="space-y-1.5">
                  <label className="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider block">
                    Upload Reference Images &amp; Bouquets
                  </label>
                  
                  <div className="relative bg-surface-container-low/70 hover:bg-surface-container-low p-6 text-center border border-dashed border-outline-variant/60 transition-colors cursor-pointer group">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
                      <span className="material-symbols-outlined text-secondary text-[28px] group-hover:scale-110 transition-transform">
                        cloud_upload
                      </span>
                      <p className="font-body-sm text-on-surface font-medium">
                        Drag reference photographs here, or <span className="text-secondary underline underline-offset-4">browse files</span>
                      </p>
                      <p className="font-label-sm text-on-surface-variant/70 text-[11px]">
                        PNG, JPG, HEIC up to 25MB · Floral arrangements, palette swatches, ceremonial shots
                      </p>
                    </div>
                  </div>

                  {/* Uploaded Files Chips */}
                  {uploadedFiles.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {uploadedFiles.map((file, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-surface-container px-3 py-1.5 border border-outline-variant/30 text-[12px] font-body-sm"
                        >
                          <span className="material-symbols-outlined text-[15px] text-secondary">image</span>
                          <span className="max-w-[140px] truncate">{file.name}</span>
                          <span className="text-on-surface-variant/60 text-[11px]">({file.size})</span>
                          <button
                            type="button"
                            onClick={() => removeFile(i)}
                            className="text-on-surface-variant hover:text-secondary bg-transparent border-0 cursor-pointer p-0 ml-1"
                          >
                            <span className="material-symbols-outlined text-[14px]">close</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div className="space-y-2 pt-2">
                  <span className="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider block">
                    Preferred Consultation Channel
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className={`relative flex items-center justify-between p-3.5 bg-surface-container-low cursor-pointer border transition-colors ${
                      formData.channel === 'whatsapp' ? 'border-secondary' : 'border-outline-variant/30'
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">chat</span>
                        <span className="font-body-sm text-on-surface">WhatsApp Concierge</span>
                      </div>
                      <input
                        type="radio"
                        name="contact-channel"
                        value="whatsapp"
                        checked={formData.channel === 'whatsapp'}
                        onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                        className="accent-secondary h-4 w-4"
                      />
                    </label>

                    <label className={`relative flex items-center justify-between p-3.5 bg-surface-container-low cursor-pointer border transition-colors ${
                      formData.channel === 'email' ? 'border-secondary' : 'border-outline-variant/30'
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">mail</span>
                        <span className="font-body-sm text-on-surface">Formal Email Dossier</span>
                      </div>
                      <input
                        type="radio"
                        name="contact-channel"
                        value="email"
                        checked={formData.channel === 'email'}
                        onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                        className="accent-secondary h-4 w-4"
                      />
                    </label>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-atelier-primary py-4 text-center justify-center text-[11px] shadow-md group"
                  >
                    <span>Send Bespoke Enquiry</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      north_east
                    </span>
                  </button>
                  <p className="font-label-sm text-[11px] text-on-surface-variant/60 text-center mt-3">
                    Every commission enters our handcrafted curing docket. Typical studio evaluation: within 24 business hours.
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Direct WhatsApp, Atelier Credentials & Visual Heirloom */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct WhatsApp Concierge Card */}
            <div className="bg-surface-container p-6 sm:p-8 relative overflow-hidden border border-outline-variant/30 shadow-sm">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[120px] text-secondary">spa</span>
              </div>
              
              <div className="relative z-10 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 font-label-caps text-secondary text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  Live Atelier Channel
                </div>

                <h3 className="font-headline-md text-on-surface text-[24px]">
                  Prefer WhatsApp?
                </h3>

                <p className="font-body-md text-on-surface-variant font-light leading-relaxed">
                  Chat with Aenon directly for instant discussions, real-time floral preservation guidance, and custom preliminary sketches prior to dispatching your bridal blooms.
                </p>

                <a
                  href="https://wa.me/919876543210?text=Hello%20Aenon%20Resin%20Arts!%20I%20would%20like%20to%20discuss%20a%20custom%20resin%20piece%20for%20my%20celebration."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-atelier-primary py-3.5 px-6 text-[10px] mt-2 flex items-center justify-center gap-2 text-decoration-none shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary-dim">chat</span>
                  <span>Chat on WhatsApp</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>

                {/* Botanical Micro Divider */}
                <div className="filament-divider py-2 opacity-50">
                  <span className="filament-line"></span>
                  <span className="material-symbols-outlined text-secondary text-[16px]">local_florist</span>
                  <span className="filament-line"></span>
                </div>

                {/* Atelier Detail Rows */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-[9px] uppercase tracking-wider text-on-surface-variant/70">
                        WhatsApp Studio Line
                      </span>
                      <a
                        href="https://wa.me/919876543210"
                        className="font-body-md text-[14px] text-on-surface font-medium hover:text-secondary transition-colors text-decoration-none"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">call</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-[9px] uppercase tracking-wider text-on-surface-variant/70">
                        Phone Direct
                      </span>
                      <a
                        href="tel:+919876543210"
                        className="font-body-md text-[14px] text-on-surface font-medium hover:text-secondary transition-colors text-decoration-none"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-[9px] uppercase tracking-wider text-on-surface-variant/70">
                        Studio Dossier Correspondence
                      </span>
                      <a
                        href="mailto:studio@aenonresinarts.com"
                        className="font-body-md text-[14px] text-on-surface font-medium hover:text-secondary transition-colors text-decoration-none"
                      >
                        studio@aenonresinarts.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-[9px] uppercase tracking-wider text-on-surface-variant/70">
                        Instagram Portfolio
                      </span>
                      <a
                        href="https://instagram.com/aenon_resin_arts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body-md text-[14px] text-on-surface font-medium hover:text-secondary transition-colors text-decoration-none"
                      >
                        @aenon_resin_arts
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Instagram Preview & Archival Artifact Showcase */}
            <div className="bg-surface-container-low p-6 border border-outline-variant/30 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-label-caps text-[10px] uppercase tracking-[0.2em] text-secondary">
                    Follow the Studio Journey
                  </span>
                  <p className="font-headline-sm text-[16px] text-on-surface mt-0.5">
                    @aenon_resin_arts
                  </p>
                </div>
                <a
                  href="https://instagram.com/aenon_resin_arts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-caps text-[10px] uppercase tracking-wider text-on-surface hover:text-secondary flex items-center gap-1 border-b border-secondary pb-0.5 text-decoration-none"
                >
                  <span>Follow</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
              </div>

              <div className="relative group overflow-hidden bg-surface-container-highest aspect-[4/3]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn_o0bwXII3hT9LKKL_OQ9b3j0my7j3xhVjUiyitVozTaa7unzOgBn7hNiiOMQEmSHJyrRriykJcKe7DbNS9b6EfP5gqhiUYx_IkWdG2aMT0aJzx5UfA2Vo8DyF8LA-vWcCcfBbE5Nk3URYi2Eek1fd7otzVZX_Z-2xZVccZH1N_mferavKhVDYQNxoHGSaYU9USCD4Z7ZdkC_avePKCWvv1wPLUYd0TQoKfMKq9DVI4yx6FC_vdx_"
                  alt="Engagement ring platter crafted in translucent crystal resin infused with dried florals and gold leaf"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="font-label-caps text-[9px] uppercase tracking-widest text-secondary-dim">
                    Master Curation
                  </span>
                  <p className="font-title-editorial text-[14px] mt-0.5 leading-snug">
                    Handcrafted Bridal Engagement Ring Platter with Gilded Foliage
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between font-label-sm text-[11px] text-on-surface-variant flex-wrap gap-2">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-secondary">verified_user</span>
                  100% Archival Preservation Guarantee
                </span>
                <span className="italic text-on-surface-variant/70">
                  Kerala &amp; Worldwide Shipping
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Timeline / Protocol Banner */}
      <section className="w-full bg-surface-container py-16 border-t border-outline-variant/30">
        <div className="max-w-atelier mx-auto px-atelier">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-label-caps text-secondary text-[11px] tracking-[0.25em] uppercase">
              The Archival Process
            </span>
            <h2 className="font-headline-md text-on-surface text-[26px] mt-1 font-normal">
              Four Steps to Permanence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-container-lowest p-6 flex flex-col justify-between min-h-[180px] shadow-sm border border-outline-variant/20">
              <div className="flex justify-between items-start">
                <span className="font-headline-sm text-secondary text-[22px]">01</span>
                <span className="material-symbols-outlined text-on-surface-variant/40 text-[20px]">edit_note</span>
              </div>
              <div>
                <h4 className="font-title-editorial text-on-surface text-[16px]">Initial Consultation</h4>
                <p className="font-body-sm text-on-surface-variant text-[12px] mt-1 font-light leading-relaxed">
                  Idea alignment, floral inventory, and personalized mold dimensions via WhatsApp.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 flex flex-col justify-between min-h-[180px] shadow-sm border border-outline-variant/20">
              <div className="flex justify-between items-start">
                <span className="font-headline-sm text-secondary text-[22px]">02</span>
                <span className="material-symbols-outlined text-on-surface-variant/40 text-[20px]">local_shipping</span>
              </div>
              <div>
                <h4 className="font-title-editorial text-on-surface text-[16px]">Bouquet Transit</h4>
                <p className="font-body-sm text-on-surface-variant text-[12px] mt-1 font-light leading-relaxed">
                  Express overnight arrival of fresh petals with our specialized packing guidelines.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 flex flex-col justify-between min-h-[180px] shadow-sm border border-outline-variant/20">
              <div className="flex justify-between items-start">
                <span className="font-headline-sm text-secondary text-[22px]">03</span>
                <span className="material-symbols-outlined text-on-surface-variant/40 text-[20px]">hourglass_empty</span>
              </div>
              <div>
                <h4 className="font-title-editorial text-on-surface text-[16px]">Curing &amp; Composition</h4>
                <p className="font-body-sm text-on-surface-variant text-[12px] mt-1 font-light leading-relaxed">
                  Slow artisanal cast layers, vacuum degasification, and 24K gold foil setting.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 flex flex-col justify-between min-h-[180px] shadow-sm border border-outline-variant/20">
              <div className="flex justify-between items-start">
                <span className="font-headline-sm text-secondary text-[22px]">04</span>
                <span className="material-symbols-outlined text-on-surface-variant/40 text-[20px]">diamond</span>
              </div>
              <div>
                <h4 className="font-title-editorial text-on-surface text-[16px]">Heirloom Handover</h4>
                <p className="font-body-sm text-on-surface-variant text-[12px] mt-1 font-light leading-relaxed">
                  Micro-mesh hand polish, custom engraved wooden vault, and insured door delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
