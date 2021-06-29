import "./tradePage.css";

function tradePage() {
  return (
    <>
      <div className="trade"></div>
      <div className="side-bar"></div>
      <div className="desktop-header"></div>
      <div className="main-container">
        <div className="table-container">
          <div className="search-bar"></div>
          <table className="asset-table">
            <thead>
              <tr>
                <th class="header-name">Name</th>
                <th class="header-label">Price</th>
                <th class="header-label">Change</th>
                <th class="header-label">Market cap</th>
                <th class="header-label"></th>
                <th class="header-label">Watch</th>
              </tr>
            </thead>
            <tbody>
              <tr class="asset-item"></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default tradePage;
