
import styles from './export-button.module.css'
import * as XLSX from "xlsx";

const ExportButton = ({data, title}) => {
    const handleExcelExport = () => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, "Comments");
        XLSX.writeFile(wb, `${title}.xlsx`);
      };

    return (
        <button className={styles.button} onClick={handleExcelExport}>Exportar</button>
    )
}

export default ExportButton;
