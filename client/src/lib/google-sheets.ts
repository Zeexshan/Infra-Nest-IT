export async function submitToGoogleSheets(formData: any) {
  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  if (!SCRIPT_URL) {
    console.error("VITE_GOOGLE_SCRIPT_URL is not defined");
    throw new Error("Form configuration error");
  }

  try {
    // We use 'no-cors' as requested because Google Apps Script doesn't support CORS easily
    // This makes the response opaque, so we can't read its body, but the data still reaches the script
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });

    // In 'no-cors' mode, we won't get an error unless there's a network failure
    return { success: true };
  } catch (error) {
    console.error("Google Sheets submission error:", error);
    throw error;
  }
}
