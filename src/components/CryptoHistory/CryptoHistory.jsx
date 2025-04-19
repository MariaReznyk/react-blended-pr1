import style from './CryptoHistory.module.css'
import { formatDate } from '../../Helpers/formatDate';

const CryptoHistory = ({ transaction }) => {
  return <table className={style.table}>
  <thead className={style.thead}>
    <tr>
      <th className={style.th}>№</th>
      <th className={style.th}>PRICE</th>
      <th className={style.th}>AMOUNT</th>
      <th className={style.th}>DATE</th>
    </tr>
  </thead>

    <tbody>
      {transaction.map(transaction => <tr className={style.tr} key={transaction.id}>
        <td className={style.td}>{transaction.id}</td>
        <td className={style.td}>{transaction.price}</td>
      <td className={style.td}>{transaction.amount}</td>
      <td className={style.td}>{formatDate(transaction.date)}</td>
    </tr> )}
  </tbody>
</table>;
};

export default CryptoHistory;
