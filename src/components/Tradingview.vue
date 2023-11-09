<template>
    <div>
        <TickerTape class="bg-base-100" :options="{
            symbols: [
                {
                    description: 'Dólar',
                    title: 'Dólar',
                    proName: 'FX_IDC:USDBRL'
                },
                {
                    description: 'Euro',
                    proName: 'FX_IDC:EURBRL'
                },
                {
                    description: 'Bovespa',
                    proName: 'INDEX:IBOV'
                },
                {
                    description: 'S&P 500',
                    proName: 'FOREXCOM:SPXUSD'
                },
                {
                    description: 'Euro/Dólar',
                    proName: 'EURUSD'
                },
                {
                    description: 'Dólar/Yen',
                    proName: 'USDJPY'
                }
            ],
            showSymbolLogo: true,
            colorTheme: 'dark',
            displayMode: 'regular',
            locale: 'br'
        }" />
    </div>
</template>

<script>
import { TickerTape } from 'vue-tradingview-widgets';

export default {
    name: 'tradingview-component',
    components: {
        TickerTape
    },
    data() {
        return {
            window: {
                width: 0,
                height: 0
            }
        };
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    }
};
</script>