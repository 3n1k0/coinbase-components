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
                <th class="thead-name">Name</th>
                <th>Price</th>
                <th>Change</th>
                <th class="thead-marketcap">Market cap</th>
                <th></th>
                <th>Watch</th>
              </tr>
            </thead>
            <tbody>
              <tr class="asset-item">
                <th class="asset-image"></th>
                <th class="asset-subtitle"></th>
                <th class="asset-price"></th>
                <th class="asset-change"></th>
                <th class="asset-marketcap"></th>
                <th class="asset-star"></th>
              </tr>
              <tr class="asset-item">
                <th class="asset-image"></th>
                <th class="asset-subtitle"></th>
                <th class="asset-price"></th>
                <th class="asset-change"></th>
                <th class="asset-marketcap"></th>
                <th class="asset-star"></th>
              </tr>
              <tr class="asset asset-item">
                <th class="asset-image"></th>
                <th class="asset-subtitle"></th>
                <th class="asset-price"></th>
                <th class="asset-change"></th>
                <th class="asset-marketcap"></th>
                <th class="asset-star"></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default tradePage;
