import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.tableThead}>
                <tr>
                    <th className={css.theadTitle}>Type</th>
                    <th className={css.theadTitle}>Amount</th>
                    <th className={css.theadTitle}>Currency</th>
                </tr>
            </thead>
            <tbody className={css.tableBody}>
                {items.map((item) => (
                    <tr key={item.id} className={css.row}> 
                        <td className={css.type}>{item.type}</td>
                        <td className={css.item}>{item.amount}</td>
                        <td className={css.item}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
