import React from "react";
import Link from "next/link";
import useSWR from "swr";
import Purchase from "../../server/entities/Purchase";
import { formatter } from "../../helpers/formatter";
import * as S from "./styles";
import { useRouter } from "next/router";

const PurchasesPage = () => {
  const { data: purchases, error: purchaseError } = useSWR<Purchase[]>(
    "/api/purchases"
  );
  const router = useRouter();

  if (purchaseError) return <div>error</div>;

  return (
    <S.Products>
      <h1>List of purchases</h1>

      <S.List>
        {Array.isArray(purchases) &&
          purchases?.reverse().map(purchase => (
            <S.Product>
              {formatter.format(purchase.price / 100)}
              <br />
              {purchase.id}
            </S.Product>
          ))}
      </S.List>

      <Link href="/home">
        <a>Go Home</a>
      </Link>
    </S.Products>
  );
};

export default PurchasesPage;
