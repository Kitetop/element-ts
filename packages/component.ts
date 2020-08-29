import Vue from 'vue'
abstract class ElementUIComponent<T> extends Vue {
    protected name!: string;
    protected prop!: T;
    protected setProp(): void {
        this.prop = this.$props as T;
    }
}
export default ElementUIComponent;