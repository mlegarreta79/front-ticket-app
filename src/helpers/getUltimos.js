export const getUltimos = async() => {
    const resp = await fetch('http://192.168.55.188:8080/ultimos')
    const data = await resp.json();
    return data.ultimos;
}