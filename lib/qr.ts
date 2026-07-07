export type QRType =
  | "url"
  | "text"
  | "email"
  | "phone"
  | "sms"
  | "wifi"
  | "vcard";

interface QRResult {
  valid: boolean;
  data: string;
}

/**
 * Builds the QR payload string for every QR type.
 */
export function buildQRData(
  type: QRType,
  formData: Record<string, any>
): QRResult {
  switch (type) {
    case "url": {
      const url = (formData.url ?? "").trim();

      if (!url) {
        return {
          valid: false,
          data: "",
        };
      }

      const normalized = /^https?:\/\//i.test(url)
        ? url
        : `https://${url}`;

      return {
        valid: true,
        data: normalized,
      };
    }

    case "text": {
      const text = (formData.text ?? "").trim();

      return {
        valid: text.length > 0,
        data: text,
      };
    }

    case "email": {
      const email = (formData.email ?? "").trim();

      if (!email) {
        return {
          valid: false,
          data: "",
        };
      }

      const subject = encodeURIComponent(
        formData.subject ?? ""
      );

      const body = encodeURIComponent(
        formData.body ?? ""
      );

      return {
        valid: true,
        data: `mailto:${email}?subject=${subject}&body=${body}`,
      };
    }

    case "phone": {
      const phone = (formData.phone ?? "").trim();

      return {
        valid: phone.length > 0,
        data: `tel:${phone}`,
      };
    }

    case "sms": {
      const phone = (formData.phone ?? "").trim();

      const message = formData.message ?? "";

      if (!phone) {
        return {
          valid: false,
          data: "",
        };
      }

      return {
        valid: true,
        data: `SMSTO:${phone}:${message}`,
      };
    }

    case "wifi": {
      const ssid = formData.ssid ?? "";
      const password = formData.password ?? "";
      const security =
        formData.security ?? "WPA";

      if (!ssid) {
        return {
          valid: false,
          data: "",
        };
      }

      return {
        valid: true,
        data: `WIFI:T:${security};S:${ssid};P:${password};;`,
      };
    }

    case "vcard": {
      const firstName =
        formData.firstName ?? "";

      const lastName =
        formData.lastName ?? "";

      const phone =
        formData.phone ?? "";

      const email =
        formData.email ?? "";

      const company =
        formData.company ?? "";

      const website =
        formData.website ?? "";

      if (!firstName && !phone && !email) {
        return {
          valid: false,
          data: "",
        };
      }

      return {
        valid: true,
        data: `BEGIN:VCARD
VERSION:3.0
FN:${firstName} ${lastName}
ORG:${company}
TEL:${phone}
EMAIL:${email}
URL:${website}
END:VCARD`,
      };
    }

    default:
      return {
        valid: false,
        data: "",
      };
  }
}