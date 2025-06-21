import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon } from "lucide-react";

export default function LoginPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Welcome Back!</CardTitle>
                <CardDescription>Login with your GitHub account</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
                <Button className="w-full" variant={"outline"}>
                    <GithubIcon className="size-4" />
                    Sign in with GitHub
                </Button>

                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-card px-2 text-muted-foreground">continue with</span>
                </div>

                <div className="grid gap-3">
                    <div className="grid gap-2">
                        <Label htmlFor="email">email</Label>
                        <Input type="email" placeholder="test@example.com" />
                    </div>
                    <Button>Continue with email</Button>
                </div>
            </CardContent>
        </Card>
    );
}
