# FE Study : react01
> car list 

## application 사양

## 배포과정 trouble shooting
- aws amplify 호스팅 빌드 에러 발생 <br/>
    -> AWS Amplify - 앱설정 - 빌드성정 - 앱 빌드 사양 Edit - 
- npm ci `--legacy-peer-deps`

- FE, BE 배포에서 SSL 인증서 설정
  - BE: CloudFront-(ACM)-ALB 구성
  - FE: Amplify 에서 커스텀 SSL 구성

- Route53 에서 car.weclist.com 으로 A Record 등록