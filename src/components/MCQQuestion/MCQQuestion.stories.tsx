import type { Meta, StoryObj } from "@storybook/react";
import { MCQQuestion } from "./MCQQuestion";
import type { MCQQuestionProps } from "./MCQQuestion.types";

const meta: Meta<typeof MCQQuestion> = {
    title: "Components/MCQQuestion",
    component: MCQQuestion,
    argTypes: {
        question: { control: "text" },
        number: { control: "number" },
        disabled: { control: "boolean" },
    },
};
export default meta;

type Story = StoryObj<typeof MCQQuestion>;

const options = [
    { label: "Double", value: "double" },
    { label: "Float", value: "float" },
    { label: "Long Int", value: "long" },
    { label: "Int", value: "int" },
];

export const Default: Story = {
    args: {
        number: 1,
        question:
            "Eesha works for ISRO where she is involved in a mission to intercept a comet that is likely to collide with in 1 month.",
        options,
        disabled: false,
        onChange: (v: string) => console.log("Selected:", v),
    } as MCQQuestionProps,
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
    },
};

export const LongQuestion: Story = {
    args: {
        ...Default.args,
        question:
            "Eesha works for ISRO where she is involved in a mission to intercept a comet that is likely to collide with in 1 month.she is developing a c program to calculate the trajectory of the missile to be launched to intercept and destroying the approaching comet.in order to achieve highest accuracy of the missile trajectory what data type should she use for the variables in her equation??",
    },
};
/*La history MobileLayout esta modificado a fuerza bruta solo para que se VISUALICE bien
en storybook, no se adaptara a pantallas, los que si se adapatan son las demas
storys, ⚠️ no afecta en nada al componente*/
export const MobileLayout: Story = {
    args: {
        ...Default.args,
        question:
            "Which of the following data types provides the highest precision in numerical calculations?",
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    width: "320px",
                    margin: "0 auto",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                    }}
                >
                    <style>{`
                        .MuiRadioGroup-root > div {
                            display: flex !important;
                            flex-direction: column !important;
                            gap: 12px !important;
                        }
                    `}</style>
                    <Story />
                </div>
            </div>
        ),
    ],
};




