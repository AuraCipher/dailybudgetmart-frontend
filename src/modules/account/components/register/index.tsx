"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)

  return (
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
    >
      <h1 className="text-3xl font-bold text-primary mb-2">
        Create Account
      </h1>
      <p className="text-center text-muted-foreground mb-6">
        Join DailyBudgetMart for exclusive deals and a personalized shopping experience
      </p>
      <form className="w-full flex flex-col space-y-4" action={formAction}>
        <div className="flex flex-col w-full gap-y-4">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
            className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
            className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
            className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
            className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
          />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
            className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-muted-foreground text-xs mt-4">
          By creating an account, you agree to DailyBudgetMart&apos;s{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="text-primary hover:underline"
          >
            Privacy Policy
          </LocalizedClientLink>{" "}
          and{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="text-primary hover:underline"
          >
            Terms of Use
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton 
          className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 mt-6" 
          data-testid="register-button"
        >
          Create Account
        </SubmitButton>
      </form>
      <span className="text-center text-muted-foreground text-sm mt-6">
        Already have an account?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="text-primary font-semibold hover:underline transition-all"
        >
          Sign In
        </button>
      </span>
    </div>
  )
}

export default Register
