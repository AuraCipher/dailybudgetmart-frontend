import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { useActionState } from "react"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div
      className="max-w-sm w-full flex flex-col items-center"
      data-testid="login-page"
    >
      <h1 className="text-3xl font-bold text-primary mb-2">Welcome Back</h1>
      <p className="text-center text-muted-foreground mb-8">
        Sign in to your DailyBudgetMart account
      </p>
      <form className="w-full space-y-4" action={formAction}>
        <div className="flex flex-col w-full gap-y-4">
          <div className="relative">
            <Input
              label="Email"
              name="email"
              type="email"
              title="Enter a valid email address."
              autoComplete="email"
              required
              data-testid="email-input"
              className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div className="relative">
            <Input
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              data-testid="password-input"
              className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
            />
          </div>
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton 
          data-testid="sign-in-button" 
          className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
        >
          Sign In
        </SubmitButton>
      </form>
      <span className="text-center text-muted-foreground text-sm mt-6">
        Don't have an account?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="text-primary font-semibold hover:underline transition-all"
          data-testid="register-button"
        >
          Create Account
        </button>
      </span>
    </div>
  )
}

export default Login
