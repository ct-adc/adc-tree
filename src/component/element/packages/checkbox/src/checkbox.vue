<template>
    <label class="el-checkbox">
    <span class="el-checkbox__input"
          :class="{
        'is-disabled': disabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      }"
    >
      <span class="el-checkbox__inner"></span>
      <input
              v-if="trueLabel || falseLabel"
              class="el-checkbox__original"
              type="checkbox"
              :name="name"
              :disabled="disabled"
              :true-value="trueLabel"
              :false-value="falseLabel"
              v-model="model"
              @change="handleChange"
              @focus="focus = true"
              @blur="focus = false">
      <input
              v-else
              class="el-checkbox__original"
              type="checkbox"
              :disabled="disabled"
              :value="label"
              :name="name"
              v-model="model"
              @change="handleChange"
              @focus="focus = true"
              @blur="focus = false">
    </span>
        <span class="el-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
    </label>
</template>
<script type="es6">
    import Emitter from 'element-ui/src/mixins/emitter';

    export default {
        name: 'ElCheckbox',

        mixins: [Emitter],

        componentName: 'ElCheckbox',

        data() {
            return {
                selfModel: false,
                focus: false
            };
        },

        computed: {
            model: {
                get () {
                    return this.isGroup
                        ? this.store : this.value !== undefined
                            ? this.value : this.selfModel;
                },

                set (val) {
                    if (this.isGroup) {
                        this.dispatch('ElCheckboxGroup', 'input', [val]);
                    } else if (this.value !== undefined) {
                        this.$emit('input', val);
                    } else {
                        this.selfModel = val;
                    }
                }
            },

            isChecked() {
                if ({}.toString.call(this.model) === '[object Boolean]') {
                    return this.model;
                } else if (Array.isArray(this.model)) {
                    return this.model.indexOf(this.label) > -1;
                } else if (this.model !== null && this.model !== undefined) {
                    return this.model === this.trueLabel;
                }
            },

            isGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'ElCheckboxGroup') {
                        parent = parent.$parent;
                    } else {
                        this._checkboxGroup = parent;
                        return true;
                    }
                }
                return false;
            },

            store() {
                return this._checkboxGroup ? this._checkboxGroup.value : this.value;
            }
        },

        props: {
            value: {},
            label: {},
            indeterminate: Boolean,
            disabled: Boolean,
            checked: Boolean,
            name: String,
            trueLabel: [String, Number],
            falseLabel: [String, Number]
        },

        methods: {
            addToStore() {
                if (
                    Array.isArray(this.model) &&
                    this.model.indexOf(this.label) === -1
                ) {
                    this.model.push(this.label);
                } else {
                    this.model = this.trueLabel || true;
                }
            },
            handleChange(ev) {
                this.$emit('change', ev);
                if (this.isGroup) {
                    this.$nextTick(_ => {
                        this.dispatch('ElCheckboxGroup', 'change', [this._checkboxGroup.value]);
                    });
                }
            }
        },

        created() {
            this.checked && this.addToStore();
        }
    };
</script>

<style scoped>
    @charset "UTF-8";
    .el-checkbox, .el-checkbox__input {
        white-space: nowrap;
        cursor: pointer;
        display: inline-block;
        position: relative
    }

    .el-checkbox {
        color: #1f2d3d;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none
    }

    .el-checkbox + .el-checkbox {
        margin-left: 15px
    }

    .el-checkbox__input {
        outline: 0;
        line-height: 1;
        vertical-align: middle
    }

    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: #20a0ff;
        border-color: #0190fe
    }

    .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
        content: '';
        position: absolute;
        display: block;
        border: 1px solid #fff;
        margin-top: -1px;
        left: 3px;
        right: 3px;
        top: 50%
    }

    .el-checkbox__input.is-indeterminate .el-checkbox__inner::after {
        display: none
    }

    .el-checkbox__input.is-focus .el-checkbox__inner {
        border-color: #20a0ff
    }

    .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: #20a0ff;
        border-color: #0190fe
    }

    .el-checkbox__input.is-checked .el-checkbox__inner::after {
        -ms-transform: rotate(45deg) scaleY(1);
        transform: rotate(45deg) scaleY(1)
    }

    .el-checkbox__input.is-disabled .el-checkbox__inner {
        background-color: #eef1f6;
        border-color: #d1dbe5;
        cursor: not-allowed
    }

    .el-checkbox__input.is-disabled .el-checkbox__inner::after {
        cursor: not-allowed;
        border-color: #eef1f6
    }

    .el-checkbox__input.is-disabled .el-checkbox__inner + .el-checkbox__label {
        cursor: not-allowed
    }

    .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
        background-color: #d1dbe5;
        border-color: #d1dbe5
    }

    .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
        border-color: #fff
    }

    .el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner {
        background-color: #d1dbe5;
        border-color: #d1dbe5
    }

    .el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner::before {
        border-color: #fff
    }

    .el-checkbox__input.is-disabled + .el-checkbox__label {
        color: #bbb;
        cursor: not-allowed
    }

    .el-checkbox__inner {
        display: inline-block;
        position: relative;
        border: 1px solid #bfcbd9;
        border-radius: 4px;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46)
    }

    .el-checkbox__inner:hover {
        border-color: #20a0ff
    }

    .el-checkbox__inner::after {
        box-sizing: content-box;
        content: "";
        border: 2px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 6px;
        left: 4px;
        position: absolute;
        top: 2px;
        -ms-transform: rotate(45deg) scaleY(0);
        transform: rotate(45deg) scaleY(0);
        width: 4px;
        transition: transform .15s cubic-bezier(.71, -.46, .88, .6) .05s;
        -ms-transform-origin: center;
        transform-origin: center
    }

    .el-checkbox__original {
        opacity: 0;
        outline: 0;
        position: absolute;
        margin: 0;
        left: -999px
    }

    .el-checkbox__label {
        font-size: 14px;
        padding-left: 5px
    }
</style>
