const Progress = () => {
  return (
    <>
      {/*==================== Overlay Start ====================*/}
      <div className="overlay" />

      <div className="side-overlay" />

      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* ==================== Scroll to Top End Here ==================== */}
    </>
  );
};

export default Progress;
