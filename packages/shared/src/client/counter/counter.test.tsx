import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Counter } from "./counter";

describe.concurrent("counter", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<Counter className={clx} />);
		expect(screen.getByTestId("counter").classList).toContain(clx);
	});
});
