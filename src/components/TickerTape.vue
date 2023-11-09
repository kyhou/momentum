<template>
    <iframe style="border: none; width:100%; height: 373px;" data-widget-name="" name="TickerTape"
        src="https://darqube.com/external-embedding/ticker-tape?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWRnZXQiOnsiYXNzZXRfY2xhc3NlcyI6WyJJTkRFWEVTIiwiU1RPQ0tTIiwiRk9SRVgiXX0sIndfdHlwZSI6IlRpY2tlclRhcGUiLCJmZV9jZmciOnsiY21vZGUiOjAsImZjbHIiOiJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIiwiYmciOiJyZ2JhKDIxLCAyNSwgMzAsIDEpIiwiaCI6MzczLCJ3IjoxMTAwLCJhc3oiOnRydWUsImZ0IjoiZGVmYXVsdCIsImh0Ijoibm9uZSIsInRyaCI6W10sImNoYyI6InJnYmEoMjM3LCA1MCwgOTgsIDEpIiwiYmUiOmZhbHNlLCJiYyI6InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIsImJ3IjoxLCJjbiI6IiIsImxuZyI6ImVuIiwiY3RybHQiOjEsImhkaWNuIjpmYWxzZSwid3RtViI6eyJ0eXBlIjoiRGFycXViZSIsImVuYWJsZWQiOnRydWV9LCJ1YyI6InJnYmEoNDgsIDEzMSwgMTA5LCAxKSIsImRjIjoicmdiYSgyMzcsIDUwLCA5OCwgMSkiLCJjdHJsdiI6MSwic21iIjpbeyJuIjoiQk9WRVNQQSBJbmRleCIsInQiOiJCVlNQLklORFgifSx7Im4iOiJCcmF6aWxpYW4gUmVhbCAvIFVTIERvbGxhciIsInQiOiJCUkxVU0QuRk9SRVgifSx7Im4iOiJCcmF6aWxpYW4gUmVhbCAvIEV1cm8iLCJ0IjoiQlJMRVVSLkZPUkVYIn0seyJuIjoiQnJhemlsaWFuIFJlYWwgLyBTd2lzcyBGcmFuYyIsInQiOiJCUkxDSEYuRk9SRVgifSx7Im4iOiJCcmF6aWxpYW4gUmVhbCAvIEphcGFuZXNlIFllbiIsInQiOiJCUkxKUFkuRk9SRVgifSx7Im4iOiJCcmF6aWxpYW4gUmVhbCAvIFJ1c3NpYW4gUnVibGUiLCJ0IjoiQlJMUlVCLkZPUkVYIn0seyJuIjoiUyZQIDUwMCBJbmRleCIsInQiOiJHU1BDLklORFgifV0sIm9wbiI6ZmFsc2UsImN0ZGMiOmZhbHNlfSwiZXhwIjoxNjgxNDA5OTU4LCJzdWIiOiJhY2Nlc3MifQ.J-znBcePBiE0WDjO7KiMf71fPP4oF_Nw9_ygNnJKHdM"
        id="TickerTape-d4bk0yn"></iframe>
</template>

<script>

export default{
    name: "TickerTape",
}

window.top.addEventListener("message", function (msg) {
    const widget = document.getElementById('TickerTape-d4bk0yn');

    if (!widget) return;

    const styles = msg.data?.styles;
    if (styles) {
        Object.keys(styles).forEach(key => widget.style.setProperty(key, styles[key]))
    }

    const height = msg.data?.tickerTapeHeight;

    if (height) {
        widget.style.setProperty('height', height + 'px');
    }
});
</script>