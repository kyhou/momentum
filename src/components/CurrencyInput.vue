<script setup>
import { watch } from 'vue';
import { useCurrencyInput } from 'vue-currency-input';
import { useField } from 'vee-validate';

const props = defineProps({
    name: String,
    options: Object,
    message: String,
    modelValue: Number
});

// If the vue-currency-input exposed the numeric value it would be much easier
const { formattedValue, inputRef, setValue } = useCurrencyInput(props.options);
const { errorMessage, handleChange } = useField(props.name);

watch(
    () => props.modelValue,
    (value) => {
        setValue(value)
    }
)

// We can track the formatted value ourselves and sync it with vee-validate as a number when possible
watch(formattedValue, (newValue) => {
    // when the input is empty we should tell vee-validate that it has no value
    if (newValue === '') {
        handleChange(undefined);
        return;
    }

    // otherwise try to parse the number
    let newNumber = Number(newValue);
    // it got formatted so its not a valid number now
    if (Number.isNaN(newNumber)) {
        newNumber = Number(newValue.replace("R$", "").replace(".", "").replace(",", ".").trim());

        if (Number.isNaN(newNumber)) {
            return;
        }
    }

    // sync it with vee-validate, this will trigger validation
    handleChange(newNumber);
    // handleChange(newNumber, false); // doesn't trigger validation
});
</script>

<template>
    <div>
        <label for="currency" class="text-white">{{ message }}</label>
        <input class="mt-2 w-full px-4 py-2" id="currency" ref="inputRef" type="text" :value="formattedValue" />
        <span class="mt-2 text-neutral">{{ errorMessage }}</span>
    </div>
</template>