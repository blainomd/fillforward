"use client";

import { useState } from "react";

function EmailForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div
        className={`flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium ${
          variant === "dark" ? "bg-white/10 text-white" : "bg-amber-50 text-amber-dark"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
        You&apos;re on the list. First pour is on us.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className={`flex-1 px-5 py-3 rounded-full text-sm outline-none transition-all ${
          variant === "dark"
            ? "bg-white/10 text-white placeholder:text-white/40 border border-white/20 focus:border-white/50"
            : "bg-white text-bark placeholder:text-bark-light/50 border border-amber-light focus:border-amber"
        }`}
      />
      <button
        type="submit"
        className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
          variant === "dark"
            ? "bg-white text-amber-dark hover:bg-amber-50"
            : "bg-amber-dark text-white hover:bg-bark"
        }`}
      >
        Get Notified
      </button>
    </form>
  );
}

export default function Home() {
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

          <div className="mt-10 flex justify-center">
            <EmailForm variant="light" />
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
              64 ounces of kombucha is a full evening. You&apos;re full. You&apos;re satisfied.
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
                  <span className="text-amber-light/40">16oz</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>6:45 PM &mdash; Second pour with dinner</span>
                  <span className="text-amber-light/40">16oz</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>7:30 PM &mdash; Third pour on the couch</span>
                  <span className="text-amber-light/40">16oz</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>8:15 PM &mdash; Last pour. Growler empty.</span>
                  <span className="text-amber-light/40">16oz</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-sm">
                <span className="text-amber-light/60">Total</span>
                <span className="font-bold text-white">$5 &middot; 0 cans &middot; 120 cal</span>
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
                <div className="text-3xl font-bold text-amber-dark">50 lbs</div>
                <div className="text-xs text-bark-light">potential weight loss/yr</div>
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
                desc: "64oz glass growler. Fill it up. $5. Walk home. That's your evening sorted. Bring it back empty next time.",
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
                <div className="flex justify-between"><span className="text-white/50">Distributor</span><span className="text-amber-light">$0 (co-op route)</span></div>
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

      {/* BALANCE + Scale */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-light/50 rounded-full text-xs font-medium text-amber-dark mb-6">
              Medicare BALANCE Program &middot; July 2026
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-bark">
              Step on the scale.
              <br />
              <span className="text-amber-dark">The growler did the work.</span>
            </h2>
            <p className="mt-4 text-bark-light text-lg max-w-2xl mx-auto">
              Replace 600 calories of beer with 120 calories of kombucha every night.
              Your smart scale tracks the result. Your physician attests to it.
              Medicare pays $50/month for the outcome you wanted anyway.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Scale + ComfortCard integration */}
            <div className="bg-cream rounded-2xl p-8">
              <h3 className="font-bold text-bark mb-6">Your morning.</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white rounded-xl">
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-dark">
                      <rect x="4" y="8" width="16" height="12" rx="2" />
                      <path d="M12 12v4" />
                      <path d="M9 14h6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-bark">Step on smart scale</div>
                    <div className="text-xs text-bark-light">Withings or Renpho &middot; $40 from your garage node</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-xl">
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-dark">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-bark">Weight syncs to ComfortCard</div>
                    <div className="text-xs text-bark-light">Bluetooth &rarr; automatic &rarr; no app needed</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-xl">
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-dark">
                      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 00-3-3.87" />
                      <path d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-bark">Physician reviews weekly</div>
                    <div className="text-xs text-bark-light">5 min/week &middot; clinically attested</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-xl">
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-dark">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-bark">Medicare pays $50/month</div>
                    <div className="text-xs text-bark-light">BALANCE program &middot; for the outcome you already created</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wallet mockup */}
            <div className="bg-bark rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold">ComfortCard</h3>
                <span className="text-xs text-white/30">BALANCE enrolled</span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Current weight</span>
                  <span className="font-medium">198.4 lbs</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Start weight</span>
                  <span className="text-white/40">213.0 lbs</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Progress</span>
                  <span className="font-medium text-amber-light">-14.6 lbs</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Target BMI</span>
                  <span className="text-white/40">28.0 &rarr; 25.0</span>
                </div>
              </div>

              {/* Mini trend line */}
              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <div className="text-xs text-white/30 mb-3">90-day trend</div>
                <svg viewBox="0 0 200 50" className="w-full h-12">
                  <polyline
                    points="0,5 15,8 30,6 45,12 60,10 75,15 90,18 105,20 120,22 135,28 150,30 165,35 180,38 200,42"
                    fill="none"
                    stroke="#D97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="200" cy="42" r="3" fill="#D97706" />
                </svg>
                <div className="flex justify-between text-[10px] text-white/20 mt-1">
                  <span>Jan 5</span>
                  <span>Today</span>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                <div className="text-xs text-white/30 mb-2">Recent</div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/50">Today 6:42 AM</span>
                  <span>198.4 lbs</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/50">Yesterday</span>
                  <span>199.1 lbs</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/50">Apr 2</span>
                  <span>199.8 lbs</span>
                </div>
              </div>

              <div className="mt-6 p-3 bg-amber-dark/30 rounded-xl border border-amber/20 text-center">
                <div className="text-xs text-amber-light/70">BALANCE reimbursement this month</div>
                <div className="text-lg font-bold text-amber-light">$50.00</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-bark-light max-w-xl mx-auto">
              Scale goes silent for 7 days? That&apos;s a check-in trigger.
              Same signal as &ldquo;she stopped coming for kombucha on Tuesdays.&rdquo;
              The cooperative notices. The caregiver calls. That&apos;s the network.
            </p>
          </div>
        </div>
      </section>

      {/* 41,683 */}
      <section className="py-24 px-6 bg-bark text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-8xl sm:text-9xl font-bold text-amber mb-4 tracking-tight">
            41,683
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            zip codes in America.
            <br />
            <span className="text-white/50">One garage tap in each.</span>
          </h2>
          <p className="text-white/40 leading-relaxed max-w-xl mx-auto mb-12">
            That&apos;s the mission. A co-op.care kombucha garage in every zip code.
            Community-owned. Zero waste. Funded by the health outcomes
            they create. Every growler filled is a can that never existed,
            a neighbor who knows your name, and a caregiver who&apos;s already
            in the network when you need one.
          </p>

          <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-12">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber">10</div>
              <div className="text-[10px] text-white/30 mt-1">Boulder<br/>2026</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber">100</div>
              <div className="text-[10px] text-white/30 mt-1">Colorado<br/>2027</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber">1,000</div>
              <div className="text-[10px] text-white/30 mt-1">Mountain West<br/>2028</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber">41,683</div>
              <div className="text-[10px] text-white/30 mt-1">Every zip<br/>2030</div>
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
            Single-use bottles. Single-use cans. Single-use caregivers
            who leave in six months. Single-use relationships that end
            when the transaction does.
          </p>
          <p className="text-amber-light/80 leading-relaxed text-lg">
            Fill Forward is a co-op.care health program — a cooperative where
            your kombucha, your smart scale, your caregiver, and your
            neighbor are all part of the same network. You own it.
            You fill it. You pass it forward.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="https://co-op.care" target="_blank" rel="noopener noreferrer" className="text-sm text-amber-light/60 hover:text-white transition-colors">
              co-op.care ↗
            </a>
            <a href="https://comfortcard.org" target="_blank" rel="noopener noreferrer" className="text-sm text-amber-light/60 hover:text-white transition-colors">
              ComfortCard ↗
            </a>
            <a href="https://sh-room.com" target="_blank" rel="noopener noreferrer" className="text-sm text-amber-light/60 hover:text-white transition-colors">
              Sh-Room ↗
            </a>
          </div>
        </div>
      </section>

      {/* Notify CTA */}
      <section id="notify" className="py-20 px-6 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-bark mb-4">
            First garage. Boulder. 2026.
          </h2>
          <p className="text-bark-light mb-8">
            10 neighbors. 1 keg. $2.50/pint. Zero waste.
            Get notified when we open the first tap.
          </p>
          <div className="flex justify-center mb-6">
            <EmailForm variant="dark" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bark border-t border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
          <span className="text-white/30 text-xs">Fill Forward is a co-op.care initiative</span>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
            <a href="https://co-op.care" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">co-op.care</a>
            <a href="https://sh-room.com" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">sh-room.com</a>
            <a href="https://comfortcard.org" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">comfortcard.org</a>
            <a href="https://caregoals.com" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">caregoals.com</a>
            <a href="https://surgeonvalue.com" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">surgeonvalue.com</a>
            <a href="https://solvinghealth.com" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">solvinghealth.com</a>
            <a href="https://doesyourbackhurt.com" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">doesyourbackhurt.com</a>
            <a href="https://themissedcode.com" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">themissedcode.com</a>
            <a href="https://lastconversation.org" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors">lastconversation.org</a>
          </div>
          <p className="text-white/15 text-xs">Built entirely by AI. Boulder, CO.</p>
        </div>
      </footer>
    </div>
  );
}
