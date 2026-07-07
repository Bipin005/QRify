import { z } from "zod";

const urlSchema = z.string().url();

export function normalizeUrl(value: string): string {
  const trimmed = value.trim();

  if (!trimmed) return "";

  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://")
  ) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

export function validateUrl(value: string) {
  const normalized = normalizeUrl(value);

  const result = urlSchema.safeParse(normalized);

  return {
    valid: result.success,
    normalized,
  };
}