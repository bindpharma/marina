interface JsonLdProps {
  data: object | object[];
}

/**
 * JSON-LD enjekte eder. Server component — script tag ile HTML'e gömülür.
 * Kullanım: <JsonLd data={localBusinessSchema} />
 */
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
