import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ContactSchema } from "../schema";
import { createFeedback } from "../api";
import { Label, FieldError, Input, Textarea } from "./FormControls";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(ContactSchema) });

  const mutation = useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = (values) => mutation.mutate(values);

  return (
    <div className="rounded-2xl bg-slate-900/40 p-6 ring-1 ring-white/10">
      <h3 className="text-xl font-semibold text-slate-100">Let's connect constellations</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Last Name" invalid={!!errors.lastName} {...register("lastName")} />
            <FieldError message={errors.lastName?.message} />
          </div>
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="First Name" invalid={!!errors.firstName} {...register("firstName")} />
            <FieldError message={errors.firstName?.message} />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" invalid={!!errors.email} {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Phone Number" invalid={!!errors.phone} {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Message" invalid={!!errors.message} {...register("message")} />
          <FieldError message={errors.message?.message} />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || mutation.isPending}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-3 font-medium text-white shadow-lg transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span>Send it to the moon</span>
          <span className="transition-transform group-hover:translate-x-0.5">🚀</span>
        </button>

        {mutation.isSuccess && (
          <p className="text-sm text-emerald-400">Thanks! Your message has been launched ✨</p>
        )}
        {mutation.isError && (
          <p className="text-sm text-rose-400">Something went wrong: {mutation.error?.message}</p>
        )}
      </form>
    </div>
  );
}
