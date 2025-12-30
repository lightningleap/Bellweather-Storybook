"use client";

import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

interface ProcessPageFlipProps {
  accent: string;
  accentDark: string;
}

export function ProcessPageFlip({ accent, accentDark }: ProcessPageFlipProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookRef = useRef<any>(null);
  const sectionRef = useRef<HTMLElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [hasEnteredZone, setHasEnteredZone] = useState(false);
  const [hasCompletedPages, setHasCompletedPages] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollAccumulator = useRef(0);
  const lastExitTime = useRef(0);
  const isResetting = useRef(false);
  const SCROLL_THRESHOLD = 300;
  const EXIT_COOLDOWN = 800;
  const totalPages = 8; // 1 intro + 7 steps

  // Get Lenis instance from window
  useEffect(() => {
    const checkLenis = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== "undefined" && (window as any).lenis) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lenisRef.current = (window as any).lenis;
      }
    };

    checkLenis();
    const timer = setTimeout(checkLenis, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      if (mobile) {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      } else {
        const width = window.innerWidth - 144;
        const height = window.innerHeight;
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Control Lenis based on zone state
  useEffect(() => {
    if (lenisRef.current) {
      if (hasEnteredZone && !hasCompletedPages) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [hasEnteredZone, hasCompletedPages]);

  // Handle scroll to flip pages
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current || !bookRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const isInActiveZone =
        rect.top <= 50 && rect.top >= -50 && rect.bottom >= viewportHeight;
      const isEnteringFromBelow =
        rect.bottom <= viewportHeight && rect.bottom >= viewportHeight - 50;

      const now = Date.now();
      const canEnter = now - lastExitTime.current > EXIT_COOLDOWN;

      if (isInActiveZone && !hasEnteredZone && e.deltaY > 0 && canEnter) {
        setHasEnteredZone(true);
        setHasCompletedPages(false);
        setCurrentPage(0);
        scrollAccumulator.current = 0;
      }

      if (isEnteringFromBelow && !hasEnteredZone && e.deltaY < 0 && canEnter) {
        setHasEnteredZone(true);
        setHasCompletedPages(false);
        setCurrentPage(totalPages - 1);
        scrollAccumulator.current = 0;
        if (bookRef.current) {
          bookRef.current.pageFlip().flip(totalPages - 1);
        }
      }

      const shouldCapture = hasEnteredZone && !hasCompletedPages;

      if (!shouldCapture) {
        return;
      }

      if (isFlipping) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      scrollAccumulator.current += Math.abs(e.deltaY);
      const progress = Math.min(
        (scrollAccumulator.current / SCROLL_THRESHOLD) * 100,
        100
      );
      setScrollProgress(progress);

      if (scrollAccumulator.current >= SCROLL_THRESHOLD) {
        scrollAccumulator.current = 0;
        setScrollProgress(0);

        if (e.deltaY > 0) {
          if (currentPage < totalPages - 1) {
            e.preventDefault();
            e.stopPropagation();
            setIsFlipping(true);
            bookRef.current.pageFlip().flipNext();
            setCurrentPage((prev) => prev + 1);
            setTimeout(() => setIsFlipping(false), 800);
          } else if (currentPage === totalPages - 1) {
            // On last page (page 7), allow scrolling to next section immediately
            e.preventDefault();
            e.stopPropagation();
            setIsFlipping(false);
            setHasCompletedPages(true);
            setHasEnteredZone(false);
            lastExitTime.current = Date.now();
          }
        } else {
          // Scrolling up
          if (currentPage > 0) {
            e.preventDefault();
            e.stopPropagation();
            setIsFlipping(true);
            bookRef.current.pageFlip().flipPrev();
            setCurrentPage((prev) => prev - 1);
            setTimeout(() => setIsFlipping(false), 800);
          } else if (currentPage === 0) {
            // On first page (page 0), allow scrolling to previous section immediately
            e.preventDefault();
            e.stopPropagation();
            setIsFlipping(false);
            setHasCompletedPages(true);
            setHasEnteredZone(false);
            lastExitTime.current = Date.now();
          }
        }
      } else {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      scrollAccumulator.current = 0;
      isResetting.current = false;
    };
  }, [
    currentPage,
    totalPages,
    isFlipping,
    hasEnteredZone,
    hasCompletedPages,
    SCROLL_THRESHOLD,
  ]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!bookRef.current || !sectionRef.current || isFlipping) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isInView) return;

      const pageFlip = bookRef.current.pageFlip();

      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowRight" ||
        e.key === "PageDown"
      ) {
        e.preventDefault();
        if (currentPage < totalPages - 1) {
          setIsFlipping(true);
          pageFlip.flipNext();
          setCurrentPage((prev) => prev + 1);
          setTimeout(() => setIsFlipping(false), 800);
        }
      } else if (
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "PageUp"
      ) {
        e.preventDefault();
        if (currentPage > 0) {
          setIsFlipping(true);
          pageFlip.flipPrev();
          setCurrentPage((prev) => prev - 1);
          setTimeout(() => setIsFlipping(false), 800);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, totalPages, isFlipping]);

  // Mobile View: Simple vertical cards
  if (isMobile) {
    return (
      <section
        ref={sectionRef}
        id="process"
        className="relative min-h-screen overflow-hidden py-16 px-6 flex flex-col justify-start bg-background"
      >
        {/* Paper texture */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Notebook margin line - Hidden on mobile */}
        <div className="hidden lg:block absolute left-20 top-0 bottom-0 w-[2px] bg-red-400/30 pointer-events-none z-10 shadow-sm" />

        {/* Subtle horizontal lines - Hidden on mobile */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 31px, rgba(180, 180, 200, 0.12) 31px, rgba(180, 180, 200, 0.12) 32px)",
            paddingLeft: "80px",
          }}
        />

        {/* Page edge shadows */}
        <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-12 bg-gradient-to-l from-black/15 via-black/5 to-transparent pointer-events-none z-10" />
        <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none z-10" />

        {/* Page curl effect */}
        <div className="absolute bottom-0 right-0 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-tl from-black/5 to-transparent pointer-events-none z-10 rounded-tl-3xl" />

        {/* Title */}
        <div className="text-center mb-12 relative z-50">
          <span
            className="inline-block px-4 py-2 rounded-full mb-4 text-xs font-bold uppercase tracking-wider text-white shadow-2xl"
            style={{ backgroundColor: accent, minWidth: "120px" }}
          >
            Our Process
          </span>
          <h2 className="text-3xl font-bold mb-4 text-foreground font-heading">
            High Quality Author Services
            <br />
            <span style={{ color: accent }}>for Everyone</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto font-serif mb-2">
            Bellwether Books was founded by career publishing professionals and
            technologists who believe everyone should have access to high
            quality author services and publishing.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto font-serif font-semibold">
            No agents, no gatekeepers, no expensive publishing packages.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-6 max-w-2xl mx-auto relative z-50">
          {/* Step 1 */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 shadow-lg">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ backgroundColor: accent }}
            >
              <span className="text-3xl font-black text-white">01</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">
              Get a Quote for Services
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed font-serif">
              Our acquisitions chat will gather the required information about
              your project to provide a publishing proposal. We&apos;ll include
              all the services you need to make your book a success, and none
              that you don&apos;t.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ backgroundColor: accent }}
            >
              <span className="text-3xl font-black text-white">02</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">
              Review Your Publishing Proposal
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed font-serif">
              Questions? Tweaks? Let us know, we&apos;ll adjust your proposal to
              perfectly fit your needs and vision for your book.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 shadow-lg">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ backgroundColor: accent }}
            >
              <span className="text-3xl font-black text-white">03</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">
              E-Sign Your Proposal
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed font-serif">
              Congrats! You have a publishing contract! You&apos;ll immediately
              be assigned an acquisitions editor to start the process.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ backgroundColor: accent }}
            >
              <span className="text-3xl font-black text-white">04</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">
              We Provide Contracted Services
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed font-serif">
              Editing, design, formatting, publishing, marketing… whatever you
              need. Our expert team handles every detail with professional care.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ backgroundColor: accent }}
            >
              <span className="text-3xl font-black text-white">05</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">
              Publish!
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed font-serif">
              Bellwether creates and disseminates all metadata to retailers,
              ensuring your book is available everywhere books are sold.
            </p>
          </div>

          {/* Step 6 */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-lg">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ backgroundColor: accent }}
            >
              <span className="text-3xl font-black text-white">06</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">
              Marketing and PR
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed font-serif">
              If someone writes a book but no one reads it, did it really get
              published? We&apos;ll provide all contracted marketing services to
              help get your book to the masses.
            </p>
          </div>

          {/* Step 7 */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 shadow-lg">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ backgroundColor: accent }}
            >
              <span className="text-3xl font-black text-white">07</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">
              Ongoing Support & Royalty Payments
            </h3>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed font-serif">
              We&apos;ll make sure you have everything you need, including those
              monthly royalty payments!
            </p>
            <button
              className="w-full px-6 py-3 rounded-full font-semibold text-lg text-white transition-all hover:scale-105 shadow-lg font-serif"
              style={{ backgroundColor: accent }}
              onClick={() => (window.location.href = "#contact")}
            >
              Start Your Journey →
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Desktop View: Book flip
  return (
    <section
      ref={sectionRef}
      id="process"
      className={`relative h-screen flex flex-col items-end justify-center overflow-hidden bg-background ${
        hasEnteredZone && !hasCompletedPages ? "sticky top-0" : ""
      }`}
    >
      {/* Paper texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Notebook margin line */}
      <div className="absolute left-20 top-0 bottom-0 w-[2px] bg-red-400/30 pointer-events-none z-10 shadow-sm" />

      {/* Subtle horizontal lines */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 31px, rgba(180, 180, 200, 0.12) 31px, rgba(180, 180, 200, 0.12) 32px)",
          paddingLeft: "80px",
        }}
      />

      {/* Page edge shadows */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/15 via-black/5 to-transparent pointer-events-none z-10" />
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none z-10" />

      {/* Page curl effect */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-black/5 to-transparent pointer-events-none z-10 rounded-tl-3xl" />

      {/* Page Indicator */}
      {hasEnteredZone && !hasCompletedPages && (
        <div className="absolute left-[170px] top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPage ? "h-8" : "opacity-50"
              }`}
              style={{
                backgroundColor: index === currentPage ? accent : "#999",
              }}
            />
          ))}
        </div>
      )}

      {/* Scroll Progress Indicator */}
      {hasEnteredZone && !hasCompletedPages && (
        <div className="absolute left-[150px] bottom-16 z-50">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-2 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full rounded-full transition-all duration-100"
                style={{
                  width: `${scrollProgress}%`,
                  backgroundColor: accent,
                }}
              />
            </div>
            <span className="text-xs text-muted-foreground font-semibold">
              Keep scrolling
            </span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-end h-full w-full">
        <HTMLFlipBook
          ref={bookRef}
          width={dimensions.width}
          height={dimensions.height}
          size="fixed"
          minWidth={300}
          maxWidth={2000}
          minHeight={400}
          maxHeight={2000}
          drawShadow={true}
          flippingTime={800}
          usePortrait={true}
          startZIndex={0}
          autoSize={false}
          maxShadowOpacity={0.5}
          showCover={false}
          mobileScrollSupport={false}
          className="book-container"
          style={{}}
          startPage={0}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={50}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {/* Page 1 - Introduction */}
          <div className="page bg-gradient-to-br from-amber-50 to-white p-16">
            <div className="h-full flex flex-col justify-center max-w-3xl mx-auto">
              <div className="prose prose-xl">
                <span className="inline-block px-4 py-2 rounded-full mb-6 text-sm font-bold uppercase tracking-wider text-white shadow-md" style={{ backgroundColor: accent, minWidth: "140px" }}>
                  Our Process
                </span>
                <h2 className="text-6xl md:text-7xl font-bold mb-8 text-foreground font-heading">
                  High Quality
                  <br />
                  Author Services
                  <br />
                  <span style={{ color: accent }}>for Everyone</span>
                </h2>
                <p className="text-xl md:text-xl text-muted-foreground leading-relaxed mb-8 font-serif">
                  Bellwether Books was founded by a team of career publishing
                  professionals and technologists who shared a simple belief:
                  Everyone should have access to high quality author services
                  and publishing. No agents, no gatekeepers, no expensive
                  publishing packages. Just motivated authors working with
                  like-minded book people who happened teamed up with some
                  really smart tech people to create the perfect publishing
                  solution.
                </p>
                <p className="text-lg md:text-lg text-muted-foreground leading-relaxed font-serif font-semibold">
                  No agents, no gatekeepers, no expensive publishing packages.
                </p>
              </div>
            </div>
          </div>

          {/* Page 2 - Step 1 */}
          <div className="page bg-gradient-to-br from-yellow-50 to-amber-50 p-16">
            <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-10"
                style={{ backgroundColor: accent }}
              >
                <span className="text-5xl font-black text-white">01</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold mb-8 text-foreground font-heading">
                Get a Quote for Services
              </h3>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-serif">
                Our acquisitions chat will gather the required information about
                your project to provide a publishing proposal. We&apos;ll
                include all the services you need to make your book a success,
                and none that you don&apos;t.
              </p>
            </div>
          </div>

          {/* Page 3 - Step 2 */}
          <div className="page bg-gradient-to-br from-blue-50 to-indigo-50 p-16">
            <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-10"
                style={{ backgroundColor: accent }}
              >
                <span className="text-5xl font-black text-white">02</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold mb-8 text-foreground font-heading">
                Review Your Publishing Proposal
              </h3>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-serif">
                Questions? Tweaks? Let us know, we&apos;ll adjust your proposal
                to perfectly fit your needs and vision for your book.
              </p>
            </div>
          </div>

          {/* Page 4 - Step 3 */}
          <div className="page bg-gradient-to-br from-purple-50 to-violet-50 p-16">
            <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-10"
                style={{ backgroundColor: accent }}
              >
                <span className="text-5xl font-black text-white">03</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold mb-8 text-foreground font-heading">
                E-Sign Your Proposal
              </h3>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-serif">
                Congrats! You have a publishing contract! You&apos;ll
                immediately be assigned an acquisitions editor to start the
                process.
              </p>
            </div>
          </div>

          {/* Page 5 - Step 4 */}
          <div className="page bg-gradient-to-br from-green-50 to-emerald-50 p-16">
            <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-10"
                style={{ backgroundColor: accent }}
              >
                <span className="text-5xl font-black text-white">04</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold mb-8 text-foreground font-heading">
                We Provide Contracted Services
              </h3>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-serif">
                Editing, design, formatting, publishing, marketing… whatever you
                need. Our expert team handles every detail with professional
                care.
              </p>
            </div>
          </div>

          {/* Page 6 - Step 5 */}
          <div className="page bg-gradient-to-br from-orange-50 to-amber-50 p-16">
            <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-10"
                style={{ backgroundColor: accent }}
              >
                <span className="text-5xl font-black text-white">05</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold mb-8 text-foreground font-heading">
                Publish!
              </h3>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-serif">
                Bellwether creates and disseminates all metadata to retailers,
                ensuring your book is available everywhere books are sold.
              </p>
            </div>
          </div>

          {/* Page 7 - Step 6 */}
          <div className="page bg-gradient-to-br from-pink-50 to-rose-50 p-16">
            <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-10"
                style={{ backgroundColor: accent }}
              >
                <span className="text-5xl font-black text-white">06</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold mb-8 text-foreground font-heading">
                Marketing and PR
              </h3>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-serif">
                If someone writes a book but no one reads it, did it really get
                published? We&apos;ll provide all contracted marketing services
                to help get your book to the masses.
              </p>
            </div>
          </div>

          {/* Page 8 - Step 7 */}

          <div className="page bg-gradient-to-br from-pink-50 to-rose-50 p-16">
            <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-10"
                style={{ backgroundColor: accent }}
              >
                <span className="text-5xl font-black text-white">07</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold mb-8 text-foreground font-heading">
                Ongoing Support & Royalty Payments
              </h3>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-serif">
                We&apos;ll make sure you have everything you need, including
                those monthly royalty payments!
              </p>
              <div>
                <button
                  className="px-6 py-3 rounded-full font-semibold text-lg text-white transition-all hover:scale-105 shadow-md"
                  style={{ backgroundColor: accent }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "#contact";
                  }}
                >
                  Start Your Journey →
                </button>
              </div>
            </div>
          </div>
        </HTMLFlipBook>
      </div>

      {/* Add custom styles for the book pages */}
      <style jsx global>{`
        .page {
          box-shadow: -5px 0 30px rgba(0, 0, 0, 0.15),
            inset 0 0 30px rgba(0, 0, 0, 0.05);
          border-left: 1px solid rgba(0, 0, 0, 0.1);
          overflow: hidden;
          height: 100%;
          width: 100%;
        }
        .book-container {
          margin: 0;
        }
        .stf__wrapper {
          box-shadow: -10px 0 60px rgba(0, 0, 0, 0.3);
        }
        .stf__parent {
          perspective-origin: left center;
        }
      `}</style>
    </section>
  );
}
