import React from "react";
import Link from "next/link";
import useSWR from "swr";
import Purchase from "../../server/entities/Purchase";

const PurchasesPage = () => {
  const { data: purchases, error: purchaseError } = useSWR<Purchase[]>(
    "/api/purchases"
  );

  if (purchaseError) return <div>error</div>;

  return (
    <div>
      <h1>List of purchases</h1>
      <ul>
        {purchases?.map(purchase => (
          <li>{purchase.price}</li>
        ))}
      </ul>

      <Link href="/home">
        <a>Go Home</a>
      </Link>
    </div>
  );
};

export default PurchasesPage;
