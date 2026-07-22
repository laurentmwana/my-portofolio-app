import { Link } from "@tanstack/react-router";
import type { ComponentProps, FC } from "react";
import { Button } from "./button";

type Props = ComponentProps<typeof Button> & { href?: string };

export const ButtonLink: FC<Props> = ({ href = "#", disabled, children }) => {
	return (
		<Button
			render={(props) => (
				<Link
					className={`${disabled ? "cursor-allowed" : "cursor-pointer"} `}
					disabled={disabled}
					to={href}
					{...props}
				>
					{children}
				</Link>
			)}
		/>
	);
};
