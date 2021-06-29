import styles from "./tradePage.module.css";
import { currencies } from "./currencyData";

function tradePage() {
  return (
    <>
      <div className={styles.trade}></div>
      <div className={styles.sideBar}></div>
      <div className={styles.desktopHeader}></div>
      <div className={styles.mainContainer}>
        <div className={styles.tableContainer}>
          <table className={styles.assetTable}>
            <thead>
              <tr className={styles.searchBar}></tr>
              <tr>
                <th className={styles.theadName}>Name</th>
                <th className={styles.theadPrice}>Price</th>
                <th className={styles.theadChange}>Change</th>
                <th className={styles.theadMarketcap}>
                  Market cap
                  <svg
                    width="6"
                    height="8"
                    viewBox="0 0 6 8"
                    fill="none"
                    reversed=""
                    className={styles.sortIcon}
                  >
                    <path
                      d="M3.167 0l2.5 2.828h-5L3.167 0z"
                      fill="#B8C2CC"
                    ></path>
                    <path
                      d="M3.167 8l-2.5-2.828h5L3.167 8z"
                      fill="#1652F0"
                    ></path>
                  </svg>
                </th>
                <th className={styles.theadButtonContainer}></th>
                <th className={styles.theadWatch}>Watch</th>
              </tr>
            </thead>
            <tbody>
              {currencies.map((currency) => {
                return (
                  <tr
                    className={styles.asset + " " + styles.assetItem}
                    key={currency.name}
                  >
                    <th className={styles.assetName}>
                      <img
                        className={styles.assetImage}
                        src={currency.src}
                      ></img>
                      <span>
                        <div className={styles.assetTitle}>{currency.name}</div>
                        <div className={styles.assetSubtitle}>
                          {currency.subtitle}
                        </div>
                      </span>
                    </th>
                    <th className={styles.assetPrice}></th>
                    <th className={styles.assetChange}></th>
                    <th className={styles.assetMarketcap}></th>
                    <th className={styles.assetBuy}>
                      <button className={styles.buyButton}>Buy</button>
                    </th>
                    <th className={styles.assetStar}>
                      <svg
                        fill="none"
                        height="23"
                        viewBox="0 0 24 23"
                        width="24"
                        filled="1"
                        color="#1652F0"
                        className={styles.starIcon}
                      >
                        <svg
                          fill="none"
                          height="23"
                          viewBox="0 0 24 23"
                          width="24"
                          filled="1"
                          color="#1652F0"
                          className={styles.starIcon}
                        >
                          <path
                            d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 01.44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 01-1.152.837L12 18.787l-5.938 3.121a.795.795 0 01-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 01.44-1.354l6.638-.965 2.968-6.015a.795.795 0 011.425 0z"
                            stroke="#becada"
                          ></path>
                        </svg>
                        <path
                          d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 01.44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 01-1.152.837L12 18.787l-5.938 3.121a.795.795 0 01-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 01.44-1.354l6.638-.965 2.968-6.015a.795.795 0 011.425 0z"
                          stroke="#becada"
                        ></path>
                      </svg>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default tradePage;
