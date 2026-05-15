import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md sticky top-0 w-full z-50 flat no shadows border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-secondary-container transition-colors duration-300">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <img
            alt="Floral Brand Logo"
            className="w-8 h-8 rounded-full border border-[#D4AF37]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcpOQmf2aWr00RiY-2c6xpwiAIV5aPyY24vTcu3EI5ddxLQRFPrIsTG8P2JRPvXJ6iOMeGx58UMbZBgfAoUwO7AoO5XXHb8WDgXHSOOKNWksYiDX30DEeX2282NBmzsdGm3ywPzzKxVhYcPZYWefj6arz-r6YTaDt-tin8Iwk6VuvlmK75dBYedXHbPt2euha1ZhIyI7-TdjJxZEMgFuPEG6jlE5c2nF6a6r1yVUU6OOCZez0DwihMjcg9vWOOMCUHHqSqRmRJYg"
          />
          <h1 className="text-headline-md text-primary dark:text-primary-fixed tracking-tight">
            티타임즈 화원
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-secondary-container transition-colors duration-300 text-label-caps border border-[#D4AF37] px-4 py-2 rounded">
            Consult
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-surface-container-high">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBW-MuXtD13BqzpHaHayRzLET1R3YFFmIr0ROHY6OXoWVeLM42P-sJxfXhbsyEZQJp6bNA2DkbTaXBf9XgewJBNsIFV96l63ZCAyjXvMFXpKoCt9OJJghmfa6I3YNpKosSHWapzpm1xfEo75QS-G-IeXX2J_s1dWWUduPbSVakU0A8_3pq0RBjeynCrZCMgWLX3izwBsT0M2Qo_AdHCSFM2_9uoxG59ipFNjZjZHNV6deo2PStfjGI00duoOeZSssZiaY36kyX9Rw")',
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 text-center px-margin-mobile max-w-container-max mx-auto text-on-secondary">
            <h2 className="text-headline-xl-mobile md:text-headline-xl text-[#D4AF37] drop-shadow-lg max-w-4xl mx-auto leading-tight">
              마음을 잇는 가장 확실한 방법, Aurum Flora
            </h2>
          </div>
        </section>

        {/* Viral Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-stack-lg">
            <h3 className="text-headline-lg text-primary mb-stack-sm">
              Curated Elegance
            </h3>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Discover our latest botanical creations and share the beauty to earn exclusive rewards.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter mb-stack-lg">
            {[
              "AB6AXuDGrx69KSa3xi6JOvNyD82NZxB9yj6_2s8Ej_JNDpv8-Cq28h3WoMJt8ryiRvleY8nSWsuWn0oSSjvyXo34rSrzNQDN8I3AV_ZBawnqyfKZBtCcBmnekMQM72fAzDfmuiOSVdUIcfT__BTeusObyOFcsSYJFGcAEwKqVX8uEDj2mnMAsdD-8fhCuygXJnq1go0KCwPsRo8mYUnloPM8f8kBDNB8Fvza4pl6oxAQ4JORR5JiAugMBIT3s4pieaicEaK2npmjOng3pg",
              "AB6AXuAMQL-LfZ_0eKUsNgYwAqXVt6BOfeh8wFeHuxZqtnbXaKzlg4yGlSpl7y0BEBQY1LLmXhx_jRQvcURTJrtgD8oe3NXCIbTBq1VZiDZ50INTvR-z82251A1V7ZXKXRfdouziufZOOdTVXmJMBXT4Q7viAnLoybWHrQeflFHnxgQ5LQHWo11M-xOZK8xuH9DBdiKDHMKD4ItRQ__EyALUGO9ox63zWliHDQbaUzWK0F7aFJS7Blaz8TS0ck-gKPGLymSeQ0sFIZFjzw",
              "AB6AXuA6qevbnpvP6fikySzXD6BdeaacZ5Q08MjuaHUjejJDSeqpKO-oRAmijNjUe0JC07sUbuMpr_lZVzq9eiCNzpenJJorLGvaYQWVBmDpmzSt6nRBxrV00VKqTd9CgSd7ZP-pjJ_kWYHy4VrdhS4fUgdzOuHgutxrnovioXIOq__Kizb-t3CBkaPdtLuSZyYh3ifFVN4GlLrkF-G4ZP50LSsBJFrgQdXvcxXnRTb94ihbVCONkr5CTNkegJC-8O81RNn3_RCPPuf6ig",
              "AB6AXuCMc7WbNV5phOKLjJGsD16FD5EIiqfIsvvABpEWqN6MP2BfeqamQUR5oc2sYtoneXpYxlCQK9R1DZkuerNFxZV7RYvcyXgRY9rDiJpYo3L7mwJZywpYv955NjKyOlJmmSlA4GupdYQGB--XGOBppM9PzlL1WIPZV2julQqHEYiIORSh56vyvxK50eU22uNuQfH6PsNvql3qlumCgRbu_trGZBwpoocFXDaOYYgVJGwp2AG-cpzIlBDdllbNILVDob4R_2xLXCsyEw",
              "AB6AXuDFRFrvEKOily2AHI4Vs4NsZJJZQVYyJXnSZ8wLj5Ii4Lz4MLyRIH_7wykUSmBevMzVguT2ve8elZzyQLDqduPszm4hsXiIvkYJOHZDSDX3DghJw1HownIHw584VY4um-bl1yvzhKVRAUu6Ob793kxuve5LBwe6voqGmL4GbMrK4OYlWBERW6kcvsaEp-Kp2x856O_65KZaPhte5VEdKGn3Jfks6qgLkHjuRgbcqkodhtrZbR88KeUD3VTVHg92WYNVdkhB2zsL4Q",
              "AB6AXuCF8kBBKpXxt1rBzcGdM3nrE7Ewpy63RDKGIbo95dklevrFzcIpg6PY8JZ0QqS8DqJy4RqYuoGsf4xblquVRcH8TT_bDDqp6RBnkTvVYe7P-qgM_D92kRseybw5PrHozn2SP6Pjtqz718jIF5wI08rHwNnn-Dcbn_BlUVdRzfhdqYBnw-q5Lrn2NogjwePOO5i1nDa9FWSbKceyS0PBZ5BMA2vtcMNYsYjmVLm8dTrz-gJWegSCsM4xWwlc6Z70UpPeNR8BkPsI2Q"
            ].map((id, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden border border-[#D4AF37] shadow-[0_10px_30px_rgba(0,50,0,0.05)]">
                <img
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  src={`https://lh3.googleusercontent.com/aida-public/${id}`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/share">
              <button className="flex items-center gap-2 bg-primary text-[#D4AF37] border border-[#D4AF37] px-8 py-4 rounded-lg text-label-caps hover:bg-primary-fixed-dim transition-colors duration-300">
                <span className="material-symbols-outlined">share</span>
                Share & Earn (바이럴 퀸 도전)
              </button>
            </Link>
          </div>
        </section>

        {/* Service Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Card 1: Order */}
              <Link href="/order" className="aspect-square bg-primary rounded-xl border border-[#D4AF37] shadow-[0_10px_30px_rgba(0,50,0,0.05)] p-gutter flex flex-col justify-end relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div
                  className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmNWhbSkTEO0mAZpDXWSYmwbi1Po-VwcXk6QOHLMNhaXytkltcV-cIz8Wmr7Yfq5h-BigU3bvjvINEgRWxiCwlgy55C8vCzcFh3oyv9I5BkKIb50Idsiz79dH-5fTGTC0wt3Xe8c97fZkpluEXCLaKfs7m4zSdaxW-mkNTVwd1HMHxdSb9bR9qXVSk8Buy_ysi4GxjSuRMc_DQyfhxcirxNckzTCB1mL6A0Kd3r4_H8CF3P6RUz1EnGgcgJMf2jBg-zq4vjWcShw")',
                  }}
                ></div>
                <div className="relative z-10 text-on-primary">
                  <h4 className="text-headline-sm mb-stack-sm text-[#D4AF37]">맞춤형 꽃바구니 주문</h4>
                  <p className="text-body-md opacity-90">Bespoke arrangements tailored to your sentiment.</p>
                </div>
              </Link>

              {/* Card 2: Membership Board */}
              <Link href="/membership" className="aspect-square bg-primary rounded-xl border border-[#D4AF37] shadow-[0_10px_30px_rgba(0,50,0,0.05)] p-gutter flex flex-col justify-end relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div
                  className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBR5kPbWh1QJbszUCMROLDn37Y1Z44NPNMPF7ydM6kRKn1AQlPdI7C6v6RtmbAmq06hXE75MEXuGbmgQoCXat15Gt0IFqtvJ2eqP6cHxOwseMBWfYYZ-uomxxWueLYEWUmZIaXKhxio5Wx2Hf1Ny4Rx2915_wLjnSwMiCc7yCSRf3XmHwqF69MDFTMIBqNCNaXZ8Qk8K9A97CKMMCAFa2wYKAVk6qw4aEgE-aIrLLhv0Ga_7SrvrpQVHOxawAqz8oCmx2ekqQ8dvA")',
                  }}
                ></div>
                <div className="relative z-10 text-on-primary">
                  <h4 className="text-headline-sm mb-stack-sm text-[#D4AF37]">플라워 네트워킹 커뮤니티</h4>
                  <p className="text-body-md opacity-90">Join our exclusive circle of botanical enthusiasts.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-highest dark:bg-inverse-surface w-full border-t border-outline-variant flat flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-stack-lg gap-gutter max-w-container-max mx-auto">
        <div className="text-headline-sm text-primary dark:text-primary-fixed">Aurum Flora</div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#" className="text-label-caps text-on-surface-variant hover:text-secondary transition-colors">Collections</Link>
          <Link href="/admin" className="text-label-caps text-on-surface-variant hover:text-secondary transition-colors">Admin(CRM)</Link>
        </div>
        <div className="text-body-md text-on-surface-variant text-center md:text-right">
          © 2024 Petals & Prestige Botanical Artistry. All rights reserved.
        </div>
      </footer>

      {/* FAB */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50 pointer-events-none [&>*]:pointer-events-auto md:hidden">
        <Link href="/order">
          <button className="bg-primary dark:bg-primary-container fixed bottom-0 left-1/2 -translate-x-1/2 mb-8 rounded-full px-8 py-4 w-fit min-w-[320px] shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-on-primary font-bold text-label-caps hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all duration-300 transform active:scale-95 border border-[#D4AF37]">
            <span className="material-symbols-outlined">favorite</span>
            Send Your Heart with Flowers in 3 Seconds
          </button>
        </Link>
      </div>
    </>
  );
}
