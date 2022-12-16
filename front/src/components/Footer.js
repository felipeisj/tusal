const styles = {
    footer: {
        display: 'flex',
        height: '400px',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
    }
}

function Footer() {
    return (
        <p style={styles.footer}>Footer</p>
     );
}

export default Footer;