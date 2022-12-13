import React from "react";
import {create} from "react-test-renderer";
import {ProfileStatusWithClass} from "./ProfileStatusWithClass";

describe("ProfileStatusWithClass component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatusWithClass status={'Aisylu'} updateUserStatus={() => {
        }}/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe("Aisylu");
    });
    test("span should be shown", () => {
        const component = create(<ProfileStatusWithClass status={'Aisylu'} updateUserStatus={() => {
        }}/>);
        const instance = component.root;
        let span = instance.findByType("span")
        expect(span).not.toBeNull();
    });
    test("span should be shown like...", () => {
        const component = create(<ProfileStatusWithClass status={'Aisylu'} updateUserStatus={() => {
        }}/>);
        const instance = component.root;
        let span = instance.findByType("span")
        expect(span.children[0]).toBe('Aisylu');
    });
    test("input shouldn't be shown", () => {
        const component = create(<ProfileStatusWithClass status={'Aisylu'} updateUserStatus={() => {
        }}/>);
        const instance = component.root;
        expect(() => {
            instance.findByType("input")
        }).toThrow();
    });
    test("input shouldn be shown in editMode instead of span", () => {
        const component = create(<ProfileStatusWithClass status={'Aisylu'} updateUserStatus={() => {
        }}/>);
        const instance = component.root;
        let span = instance.findByType("span")
        span.props.onDoubleClick()
        let input = instance.findByType("input")
        expect(input.props.value).toBe('Aisylu');
    });
    test("callback should be called", () => {
        let callback = jest.fn()
        const component = create(<ProfileStatusWithClass status={'Aisylu'} updateUserStatus={callback}/>);
        const instance = component.getInstance()
        // @ts-ignore
        instance.deactivateEditMode()
        // expect(callback.mock.calls[0][0]).toBe('Aisylu');
        expect(callback).toHaveBeenCalledWith('Aisylu');
        // expect(callback.mock.calls.length).toBe(1);
        expect(callback).toHaveBeenCalledTimes(1)
    });
});
