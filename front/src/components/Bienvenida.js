
const styles = {
    bienvenida: {
        display: 'flex',
        height: '400px',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

function Bienvenida() {
    return (
        <p style={styles.bienvenida}>Bienvenida</p>
     );
}

export default Bienvenida;