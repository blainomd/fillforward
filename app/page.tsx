"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "fillforward-site" }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setSubmitError(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setSubmitError("Network error. Try again.");
    }
    setSubmitting(false);
  }

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-amber-light/30">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 40 40" className="w-7 h-7 text-amber-dark">
              <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M14 20C14 20 17 12 20 12C23 12 26 20 26 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <circle cx="20" cy="24" r="2" fill="currentColor" />
            </svg>
            <span className="text-lg font-bold tracking-tight text-bark">Fill Forward</span>
          </div>
          <a href="#notify" className="text-sm px-4 py-2 bg-amber-dark text-white rounded-full hover:bg-bark transition-colors">
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-light/50 rounded-full text-xs font-medium text-amber-dark mb-8">
            <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
            Coming to Boulder, CO
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-bark leading-[1.05]">
            Fill your growler.
            <br />
            <span className="text-amber-dark">Not the landfill.</span>
          </h1>

          <p className="mt-6 text-xl text-bark-light leading-relaxed max-w-2xl mx-auto">
            $2.50 kombucha on tap from a neighbor&apos;s garage. Bring your growler.
            Fill up. Walk home. Zero cans. Zero bottles. Zero waste.
            Community-owned.
          </p>

          <div className="mt-10 max-w-md mx-auto">
            {submitted ? (
              <div className="bg-amber-50 border border-amber-light/50 rounded-2xl p-6">
                <p className="font-bold text-bark text-lg mb-1">You&apos;re on the list.</p>
                <p className="text-bark-light text-sm">We&apos;ll be in touch when the first tap opens in Boulder.</p>
              </div>
            ) : (
              <>
                <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    disabled={submitting}
                    aria-label="Email address for Boulder waitlist"
                    className="flex-1 px-5 py-4 rounded-full border border-amber-light/50 bg-white text-bark placeholder:text-bark-light/40 focus:outline-none focus:ring-2 focus:ring-amber-dark/30 text-base disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-7 py-4 rounded-full text-base font-medium bg-amber-dark text-white hover:bg-bark transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Joining..." : "Join the waitlist"}
                  </button>
                </form>
                {submitError && (
                  <p className="mt-3 text-xs text-red-500">{submitError}</p>
                )}
                <p className="mt-3 text-xs text-bark-light/60">10 founding neighbors. Boulder only. No spam.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-bark">
              You drink 4 beers a night.
              <br />
              <span className="text-bark-light">That&apos;s 1,460 cans a year.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-cream rounded-2xl">
              <div className="text-5xl font-bold text-amber-dark mb-2">$4,380</div>
              <p className="text-bark-light text-sm">spent on beer per year<br />at $12/night</p>
            </div>
            <div className="p-8 bg-cream rounded-2xl">
              <div className="text-5xl font-bold text-amber-dark mb-2">1,460</div>
              <p className="text-bark-light text-sm">cans or bottles<br />in the landfill</p>
            </div>
            <div className="p-8 bg-cream rounded-2xl">
              <div className="text-5xl font-bold text-amber-dark mb-2">219,000</div>
              <p className="text-bark-light text-sm">empty calories<br />per year</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-bark-light">
              49% of Americans are trying to drink less. Not because they have a problem.
              <br />Because there&apos;s nothing good to drink instead.
            </p>
            <p className="mt-4 text-2xl font-bold text-bark">
              Until now.
            </p>
          </div>
        </div>
      </section>

      {/* The Swap */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-bark">
              Same evening. Different growler.
            </h2>
            <p className="mt-4 text-bark-light text-lg">
              A 32-ounce growler is a full evening. You&apos;re full. You&apos;re satisfied.
              Beer never entered the picture.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-white rounded-2xl p-8 border border-amber-light/30">
              <div className="text-xs tracking-widest uppercase text-bark-light/50 mb-4">Before</div>
              <div className="space-y-3 text-sm text-bark-light">
                <div className="flex justify-between py-2 border-b border-amber-light/20">
                  <span>6:00 PM &mdash; First beer</span>
                  <span className="text-bark-light/40">can #1</span>
                </div>
                <div className="flex justify-between py-2 border-b border-amber-light/20">
                  <span>6:45 PM &mdash; Second beer</span>
                  <span className="text-bark-light/40">can #2</span>
                </div>
                <div className="flex justify-between py-2 border-b border-amber-light/20">
                  <span>7:30 PM &mdash; Third beer</span>
                  <span className="text-bark-light/40">can #3</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>8:15 PM &mdash; Fourth beer</span>
                  <span className="text-bark-light/40">can #4</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-amber-light/20 flex justify-between text-sm">
                <span className="text-bark-light">Total</span>
                <span className="font-bold text-bark">$12 &middot; 4 cans &middot; 600 cal</span>
              </div>
            </div>

            {/* After */}
            <div className="bg-amber-dark text-white rounded-2xl p-8">
              <div className="text-xs tracking-widest uppercase text-amber-light/50 mb-4">After</div>
              <div className="space-y-3 text-sm text-amber-light/80">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>6:00 PM &mdash; First pour</span>
                  <span className="text-amber-light/40">16oz (1 pint)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>7:00 PM &mdash; Second pour with dinner</span>
                  <span className="text-amber-light/40">16oz (1 pint)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>&nbsp;</span>
                  <span className="text-amber-light/20">&nbsp;</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Growler empty. Done for the night.</span>
                  <span className="text-amber-light/40">32oz</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-sm">
                <span className="text-amber-light/60">Total</span>
                <span className="font-bold text-white">$5 &middot; 0 cans &middot; 60 cal</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-dark">$2,555</div>
                <div className="text-xs text-bark-light">saved per year</div>
              </div>
              <div className="w-px h-10 bg-amber-light" />
              <div>
                <div className="text-3xl font-bold text-amber-dark">1,460</div>
                <div className="text-xs text-bark-light">cans eliminated</div>
              </div>
              <div className="w-px h-10 bg-amber-light" />
              <div>
                <div className="text-3xl font-bold text-amber-dark">540 cal</div>
                <div className="text-xs text-bark-light">fewer per day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-bark text-center mb-16">
            How it works.
          </h2>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Local brewers make the kombucha",
                desc: "Boulder producers like Upstart, Mortal, and Rev brew in licensed facilities. They fill kegs. We pick them up.",
              },
              {
                step: "02",
                title: "Kegs go to member garages",
                desc: "Your neighbor has a kegerator in their garage. Cold, clean, on tap. The keg shows up every week from the co-op delivery route.",
              },
              {
                step: "03",
                title: "You walk over with your growler",
                desc: "32oz glass growler. Fill it up. $5. Walk home. That's your evening sorted. Bring it back empty next time.",
              },
              {
                step: "04",
                title: "The cooperative owns the network",
                desc: "No franchise. No corporation. The members own the taps, the routes, the relationships. 3% of every pour builds your cooperative equity.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-amber-dark font-bold text-sm">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bark mb-2">{item.title}</h3>
                  <p className="text-bark-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-20 px-6 bg-bark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why it&apos;s half the price.
          </h2>
          <p className="text-white/50 mb-12 max-w-lg mx-auto">
            We removed everything that makes kombucha expensive.
            What&apos;s left is the kombucha.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-xs tracking-widest uppercase text-white/30 mb-4">Retail bottle ($4.50)</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-white/50">Kombucha</span><span>$0.80</span></div>
                <div className="flex justify-between"><span className="text-white/50">Glass bottle</span><span>$0.60</span></div>
                <div className="flex justify-between"><span className="text-white/50">Label + cap</span><span>$0.15</span></div>
                <div className="flex justify-between"><span className="text-white/50">Distributor margin</span><span>$0.95</span></div>
                <div className="flex justify-between"><span className="text-white/50">Retail margin</span><span>$1.50</span></div>
                <div className="flex justify-between"><span className="text-white/50">Refrigeration</span><span>$0.30</span></div>
                <div className="flex justify-between"><span className="text-white/50">Shelf space</span><span>$0.20</span></div>
                <div className="flex justify-between border-t border-white/10 pt-2 mt-2 font-bold"><span>You pay</span><span>$4.50</span></div>
              </div>
            </div>
            <div className="bg-amber-dark/30 rounded-2xl p-6 border border-amber/20">
              <div className="text-xs tracking-widest uppercase text-amber-light/50 mb-4">Fill Forward growler ($2.50/pint)</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-white/50">Kombucha</span><span>$0.80</span></div>
                <div className="flex justify-between"><span className="text-white/50">Bottle</span><span className="text-amber-light">$0 (your growler)</span></div>
                <div className="flex justify-between"><span className="text-white/50">Label</span><span className="text-amber-light">$0</span></div>
                <div className="flex justify-between"><span className="text-white/50">Keg delivery + service</span><span>$0.60</span></div>
                <div className="flex justify-between"><span className="text-white/50">Tap host stipend</span><span>$0.47</span></div>
                <div className="flex justify-between"><span className="text-white/50">Retail margin</span><span className="text-amber-light">$0 (no store)</span></div>
                <div className="flex justify-between"><span className="text-white/50">Co-op margin</span><span>$0.55</span></div>
                <div className="flex justify-between"><span className="text-white/50">Equity accrual (3%)</span><span>$0.08</span></div>
                <div className="flex justify-between border-t border-white/10 pt-2 mt-2 font-bold"><span>You pay</span><span className="text-amber-light">$2.50</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Kombucha */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-bark mb-4">
            The tap is just the beginning.
          </h2>
          <p className="text-bark-light text-lg mb-12">
            Every garage node can carry more than kombucha.
            Same infrastructure. Same walk to your neighbor&apos;s.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {[
              { name: "Cold brew coffee", price: "$3/pint", icon: "~" },
              { name: "Cleaning supplies", price: "$3.50 refill", icon: "+" },
              { name: "CSA produce boxes", price: "Pickup point", icon: "[]" },
              { name: "Fresh eggs", price: "$5/dozen", icon: "O" },
              { name: "Grow bag refills", price: "$8 each", icon: "^" },
              { name: "Honey", price: "$8/lb refill", icon: "*" },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-5 border border-amber-light/20">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-bark text-sm">{item.name}</span>
                  <span className="text-xs text-amber-dark font-medium">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Starting in Boulder */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-bark mb-6">
            Starting in Boulder, CO.
          </h2>
          <p className="text-bark-light text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            This is a small thing. One neighborhood. One keg. Ten neighbors who
            walk instead of drive and fill instead of throw away. If that works,
            we do it again in the next neighborhood. That&apos;s the whole plan.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-cream rounded-2xl">
              <div className="text-4xl font-bold text-amber-dark mb-2">10</div>
              <p className="text-bark-light text-sm">neighbors per garage node</p>
            </div>
            <div className="p-6 bg-cream rounded-2xl">
              <div className="text-4xl font-bold text-amber-dark mb-2">1 keg</div>
              <p className="text-bark-light text-sm">swapped every week</p>
            </div>
            <div className="p-6 bg-cream rounded-2xl">
              <div className="text-4xl font-bold text-amber-dark mb-2">$2.50</div>
              <p className="text-bark-light text-sm">per pint, member-owned</p>
            </div>
          </div>
        </div>
      </section>

            {/* The Mission */}
      <section className="py-20 px-6 bg-amber-dark text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-light/50 mb-4">
            A co-op.care Health Program
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Rid the world of single use.
          </h2>
          <p className="text-amber-light/80 leading-relaxed text-lg mb-4">
            Single-use bottles. Single-use cans. Single-use relationships
            that end when the transaction does.
          </p>
          <p className="text-amber-light/80 leading-relaxed text-lg">
            Fill Forward is a co-op.care initiative — a cooperative where
            your kombucha tap, your growler, and your neighbor
            are all part of the same network. You own it.
            You fill it. You pass it forward.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="https://www.co-op.care" target="_blank" rel="noopener noreferrer" className="text-sm text-amber-light/60 hover:text-white transition-colors">
              co-op.care ↗
            </a>
            <a href="https://www.comfortcard.org" target="_blank" rel="noopener noreferrer" className="text-sm text-amber-light/60 hover:text-white transition-colors">
              ComfortCard ↗
            </a>
            <a href="https://www.sh-room.com" target="_blank" rel="noopener noreferrer" className="text-sm text-amber-light/60 hover:text-white transition-colors">
              Sh-Room ↗
            </a>
          </div>
        </div>
      </section>

      {/* Notify CTA */}
      <section id="notify" className="py-20 px-6 bg-cream">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-bark mb-4">
            First garage. Boulder. 2026.
          </h2>
          <p className="text-bark-light mb-8">
            We&apos;re looking for 10 founding neighbors in Boulder.
            One keg. $2.50/pint. Zero waste. Leave your email and
            we&apos;ll reach out when the first tap opens.
          </p>
          {submitted ? (
            <div className="bg-amber-50 border border-amber-light/50 rounded-2xl p-8">
              <p className="font-bold text-bark text-lg mb-1">You&apos;re on the list.</p>
              <p className="text-bark-light text-sm">We&apos;ll be in touch when the first tap opens in Boulder.</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={submitting}
                  className="flex-1 px-5 py-3 rounded-full border border-amber-light/50 bg-white text-bark placeholder:text-bark-light/40 focus:outline-none focus:ring-2 focus:ring-amber-dark/30 text-sm disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded-full font-medium bg-amber-dark text-white hover:bg-bark transition-colors text-sm whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Joining..." : "Join the waitlist"}
                </button>
              </form>
              {submitError && (
                <p className="text-xs text-red-500">{submitError}</p>
              )}
            </div>
          )}
          <p className="mt-4 text-xs text-bark-light/50">Boulder, CO only for now. No spam. Unsubscribe any time.</p>
        </div>
      </section>

      {/* Ecosystem Band */}
      <section className="py-16 px-6 border-t border-amber-light/20 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-bark-light/40 mb-6">Part of the co-op.care ecosystem</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="https://www.co-op.care"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-medium bg-bark transition-all hover:bg-amber-dark text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22" /></svg>
              co-op.care — aging care at home
            </a>
            <a
              href="https://www.solvinghealth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium border border-bark/20 text-bark transition-all hover:border-amber-dark text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              solvinghealth.com — the platform
            </a>
            <a
              href="https://www.sh-room.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium border border-bark/20 text-bark transition-all hover:border-amber-dark text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 2 5 6 5 10c0 3 2 5.5 5 6.5V19h4v-2.5c3-1 5-3.5 5-6.5 0-4-3-8-7-8z" /></svg>
              sh-room.com — grow your own
            </a>
          </div>
        </div>
      </section>

      {/* Connector */}
      <section id="connector" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-bark mb-4">
            Get the Fill Forward connector
          </h2>
          <p className="text-bark-light text-lg mb-8 max-w-xl mx-auto">
            Add the SolvingHealth connector to Claude and get instant access to cooperative tools, HSA savings estimates, and community services.
          </p>
          <div className="bg-cream rounded-2xl border border-amber-light/30 p-6 text-left max-w-lg mx-auto mb-8">
            <p className="text-xs font-medium text-bark-light/50 uppercase tracking-wider mb-3">Claude Desktop MCP Config</p>
            <pre className="text-sm text-bark overflow-x-auto whitespace-pre font-mono leading-relaxed">{`"fillforward": {
  "command": "npx",
  "args": ["-y", "@anthropic-ai/mcp-remote",
    "https://www.solvinghealth.com/mcp"]
}`}</pre>
          </div>
          <p className="text-bark-light text-sm">
            Don&apos;t have Claude? Get it free at{" "}
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-amber-dark font-medium hover:underline">claude.ai</a>
            {" "}or use the chat and voice widgets on this page.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bark border-t border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
          <span className="text-white/30 text-xs">Fill Forward is a co-op.care initiative</span>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
            <a href="https://www.co-op.care" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">co-op.care</a>
            <a href="https://www.sh-room.com" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">sh-room.com</a>
            <a href="https://www.comfortcard.org" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">comfortcard.org</a>
            <a href="https://www.surgeonvalue.com" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">surgeonvalue.com</a>
            <a href="https://www.solvinghealth.com" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">solvinghealth.com</a>
            <a href="https://www.doesyourbackhurt.com" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">doesyourbackhurt.com</a>
          </div>
          <p className="text-white/15 text-xs">Built entirely by AI. Boulder, CO.</p>
        </div>
      </footer>
    </div>
  );
}
