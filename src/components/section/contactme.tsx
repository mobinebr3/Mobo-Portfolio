"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Send, ArrowUpRight, CheckCircle2, AlertCircle, X } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // وضعیت مدال برای نشان دادن موفقیت یا خطا
  const [modal, setModal] = useState({
    isOpen: false,
    isSuccess: true,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      
      if (response.ok) {
        setModal({
          isOpen: true,
          isSuccess: true,
          message: "پیام شما با موفقیت ارسال شد! به زودی با شما تماس می‌گیرم.",
        });
        // ریست کردن فرم پس از ارسال موفق
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "خطایی در ارسال پیام رخ داد.");
      }
    } catch (error: any) {
      setModal({
        isOpen: true,
        isSuccess: false,
        message: error.message || "مشکلی در اتصال به سرور پیش آمده است. لطفاً دوباره تلاش کنید.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "گیت‌هاب",
      icon: Github,
      href: "https://github.com",
      color: "hover:text-neutral-900 dark:hover:text-white",
    },
    {
      name: "لینکدین",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
    },
    {
      name: "ایمیل",
      icon: Mail,
      href: "mailto:hello@example.com",
      color: "hover:text-rose-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b to-background from-muted/30 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Main Card */}
        <div className="relative bg-linear-to-tl to-accent via-muted/50 from-blue-600/10 backdrop-blur-xl border border-border/50 rounded-4xl shadow-2xl shadow-black/5 overflow-hidden">
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="p-8 sm:p-12">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/80 border border-border/50 text-sm font-medium text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                بیا یه چیز خفن بسازیم
              </span>
            </div>

            {/* Heading */}
            <div className="text-center mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                ایده‌ای داری؟
                <span className="block mt-2 text-primary">
                  باهام در تماس باش.
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-center text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              در حال حاضر برای پروژه‌های فریلنس و موقعیت‌های شغلی فرانت‌اند باز
              هستم. اگر ایده جالبی تو ذهنته، دوست دارم بشنوم.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mr-1">
                    نام شما
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 hover:border-border disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="نام و نام خانوادگی"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mr-1">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 hover:border-border disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mr-1">
                  پیام شما
                </label>
                <textarea
                  id="message"
                  required
                  disabled={isSubmitting}
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 hover:border-border resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder="توضیحات پروژه یا پیامت رو اینجا بنویس..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full sm:w-auto sm:min-w-[200px] mx-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:scale-100 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      در حال ارسال...
                    </>
                  ) : (
                    <>
                      ارسال پیام
                      <Send className="w-4 h-4 mr-1 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
                {/* Button shine effect */}
                {!isSubmitting && (
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/60" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-card/50 text-sm text-muted-foreground">
                  یا از طریق
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center justify-center w-12 h-12 rounded-xl bg-muted/50 border border-border/50 text-muted-foreground ${link.color} hover:bg-background hover:border-border hover:shadow-lg hover:shadow-black/5 transition-all duration-300`}
                  aria-label={link.name}>
                  <link.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {link.name}
                    <ArrowUpRight className="inline-block w-3 h-3 mr-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-sm text-muted-foreground/60 mt-8">
          معمولاً ظرف ۲۴ ساعت جواب میدم
        </p>
      </div>

      {/* Status Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-sm bg-card border border-border/80 rounded-2xl p-6 shadow-2xl text-center animate-in scale-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setModal({ ...modal, isOpen: false })}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>

            {/* Status Icon */}
            <div className="flex justify-center mb-4">
              {modal.isSuccess ? (
                <CheckCircle2 className="w-14 h-14 text-emerald-500 animate-bounce" />
              ) : (
                <AlertCircle className="w-14 h-14 text-destructive" />
              )}
            </div>

            {/* Status Title */}
            <h3 className="text-lg font-bold text-foreground mb-2">
              {modal.isSuccess ? "عملیات موفقیت‌آمیز" : "خطا در ارسال پیام"}
            </h3>

            {/* Status Message */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {modal.message}
            </p>

            {/* Action Button */}
            <button
              onClick={() => setModal({ ...modal, isOpen: false })}
              className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              متوجه شدم
            </button>
          </div>
        </div>
      )}
    </section>
  );
}