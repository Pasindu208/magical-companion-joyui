import * as React from 'react';
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";

export default function LoginForm() {
    return (
        <div>
            <Typography level="h4" component="h1">
                Welcome!
            </Typography>
            <Typography level="body-sm">
                Sign in to continue.
            </Typography>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                    name="password"
                    type="password"
                    placeholder="password"
                />
            </FormControl>
            <Button sx={{ mt: 1 }}>Log in</Button>
            <Typography
                endDecorator={<Link href="/sign-up">Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: "center" }}>
                Don't have an account?
            </Typography>
        </div>
    );
}