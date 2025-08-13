import { type Dictionary } from "intlayer";

const appContent = {
  key: "test",
  locale: "en",

  content: {
    test1: "Here a test in enslish",
    test2: {
      test3: [{ test4: "here again a new test in english" }],
    },
  },
} satisfies Dictionary;

export default appContent;
