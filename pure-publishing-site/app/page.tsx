/* Home page — content coming soon */
export default function HomePage() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center"
      style={{ background: "var(--off-white)" }}
    >
      <h1
        className="font-syne font-bold text-5xl md:text-7xl mb-6"
        data-animate
      >
        <span style={{ color: "var(--coral)" }}>Pure</span>{" "}
        <span style={{ color: "var(--deep-indigo)" }}>Publishing</span>
      </h1>
      <p
        className="font-nunito text-lg md:text-xl max-w-xl leading-relaxed"
        style={{ color: "var(--text-soft)" }}
        data-animate
        data-delay="200"
      >
        Words that work. Websites that win.
        <br />
        Page content coming soon.
      </p>
    </section>
  );
}
